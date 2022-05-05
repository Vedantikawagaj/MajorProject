import React, {  useState } from 'react'
import { Link } from 'react-router-dom';
import Webcam from "react-webcam";
import '../ComponentCSS/Camera.css'
const Register = () => {
    const [fn, setfn] = useState('');
    const [ln, setln] = useState('');
    const [email, setemail] = useState('');
    const [pw, setpw] = useState('');
    const [roles, setroles] = useState([]);
    const handleRegister = async () => {

        const res = await fetch('http://localhost:8080/api/auth/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'

            },
            body: JSON.stringify({
                "firstname": fn,
                "lastname": ln,
                "email": email,
                "password": pw,
                "imagelink":imgSrc,
                "roles": roles
            })
        })

        const data = await res.json();
        alert("Registration successful");
        console.log(data);


    }

    const webcamRef = React.useRef(null);
    const [imgSrc, setImgSrc] = React.useState(null);
    const videoConstraints = {
        width: 445,
        height: 200,
        facingMode: "user"
    };
  
    const capture = React.useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setImgSrc(imageSrc);
      }, [webcamRef, setImgSrc]);
    
    return (
        <div>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone" />
                        </div>

                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-2 mb-0 text-muted">Create New Account</p>
                            </div>
                            <form>
                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="form3Example1m"
                                                className="form-control form-control-lg"
                                                placeholder="First Name"
                                                value={fn}
                                                onChange={(val) => {
                                                    setfn(val.target.value)

                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4">
                                        <div className="form-outline">
                                            <input
                                                type="text"
                                                id="form3Example1n"
                                                className="form-control form-control-lg"
                                                placeholder="Last Name"
                                                value={ln}
                                                onChange={(val) => {
                                                    setln(val.target.value)

                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-outline mb-4 ">

                                    <select className="form-control form-control-lg " name="users" id="users"
                                        onChange={(val) => {
                                            setroles(roles.concat(val.target.value.toLowerCase()))

                                        }}>
                                        <option value="Select User" >Select User</option>
                                        <option value="Student">Student</option>
                                        <option value="Teacher">Teacher</option>

                                    </select>

                                </div>

                                <div className="form-outline mb-4 ">

                                    <input
                                        type="email"
                                        id="form1Example13"
                                        className="form-control form-control-lg "
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(val) => {
                                            setemail(val.target.value)

                                        }}
                                    />

                                </div>

                                <div className="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="form1Example23"
                                        className="form-control form-control-lg"
                                        placeholder="Password"
                                        value={pw}
                                        onChange={(val) => {
                                            setpw(val.target.value)

                                        }}
                                    />

                                </div>

                                <>
                                    <Webcam
                                        audio={false}
                                        ref={webcamRef}
                                        height={200}
                                        width={445}
                                        videoConstraints={videoConstraints}
                                        screenshotFormat="image/jpeg"
                                        mirrored={true}

                                    />
                                     <div type="submit" className="btn btn-dark btn-sm btn-block btn-h mv2" onClick={capture}>Capture Image</div>
                                    {imgSrc && (
                                        <img
                                        alt="ss"
                                            src={imgSrc}
                                            className="mv2"
                                        />
                                    )}

                                </>
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <button
                                        type="submit"
                                        className="btn obt btn-lg btn-block"
                                        onClick={handleRegister}>
                                        Register
                                        </button>
                                </Link>
                                <h6 className="small fw-bold mt-2 pt-1 mb-0 f5">Already have an account?
                                <Link style={{ textDecoration: 'none' }} to='/'>
                                        <h6
                                            className="link-danger">Sign In</h6>
                                    </Link>
                                </h6>




                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Register