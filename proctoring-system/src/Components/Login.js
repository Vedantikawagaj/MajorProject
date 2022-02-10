import React, { Component, useState } from 'react'
import '../ComponentCSS/Login.css'
import {Link, useNavigate} from 'react-router-dom';

const Login=()=>{
    let history=useNavigate();
    const [email,setemail]=useState('');
    const [pw,setpw]=useState('');
    const handleLogin= async () => {
        // console.log(fn + ln + email + pw);
        // alert(fn + ln + email + pw);
         const res=await fetch('http://localhost:8080/api/auth/signin',{
             method:'post',
             headers: {
                 'Content-Type': 'application/json'

             },
             body: JSON.stringify({
                "email": email,
                "password": pw,
             })
         })

         const data=await res.json();
         navigate(data);
         
    }

    const navigate=(data)=>{
        console.log(data);
        if(data.status==200)
        {
            
            history('/dashboard');
        }
        // else{
        //    alert(data.message)
        // }
        
    }
    return (
        <div>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
                        </div>

                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-2 mb-0 text-muted">Login To Your Account</p>
                            </div>
                            <form>
                                <div className="form-outline mb-4 ">

                                    <input 
                                    type="email" 
                                    id="form1Example13" 
                                    className="form-control form-control-md " 
                                    placeholder="Email address" 
                                    value={email}
                                                onChange={(val)=>{
                                                    setemail(val.target.value)

                                                }}
                                    />

                                </div>

                                <div className="form-outline mb-4">
                                    <input 
                                    type="password" 
                                    id="form1Example23" 
                                    className="form-control form-control-md" 
                                    placeholder="Password" 
                                    
                                    value={pw}
                                                onChange={(val)=>{
                                                    setpw(val.target.value)

                                                }}
                                                />

                                </div>

                               
                                {/* <Link style={{ textDecoration: 'none' }} to='/dashboard'> */}

                                <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={handleLogin}>Sign in</button>
                                {/* </Link> */}
                                <h5 className="small fw-bold mt-2 pt-1 mb-0 f5">Don't have an account? 
                                <Link style={{ textDecoration: 'none' }} to='/register'>
                                <h5 
                                    className="link-danger">Register</h5>
                            </Link>
                                </h5>




                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

// export default class Login extends Component {
//     render() {
        
//     }
// }
export default Login