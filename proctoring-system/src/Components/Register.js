import React, { Component, useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
    const [fn, setfn] = useState('');
    const [ln, setln] = useState('');
    const [email, setemail] = useState('');
    const [pw, setpw] = useState('');
    const handleRegister = async () => {
        // console.log(fn + ln + email + pw);
        // alert(fn + ln + email + pw);
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
                "roles": ["user"]
            })
        })

        const data = await res.json();
        alert("Registration successful");
        console.log(data);
    }
    return (
        <div>
            <section class="vh-100">
                <div class="container py-5 h-100">
                    <div class="row d-flex align-items-center justify-content-center h-100">
                        <div class="col-md-8 col-lg-7 col-xl-6">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" class="img-fluid" alt="Phone image" />
                        </div>

                        <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <div class="divider d-flex align-items-center my-4">
                                <p class="text-center fw-bold mx-2 mb-0 text-muted">Create New Account</p>
                            </div>
                            <form>
                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <input
                                                type="text"
                                                id="form3Example1m"
                                                class="form-control form-control-lg"
                                                placeholder="First Name"
                                                value={fn}
                                                onChange={(val) => {
                                                    setfn(val.target.value)

                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <div class="form-outline">
                                            <input
                                                type="text"
                                                id="form3Example1n"
                                                class="form-control form-control-lg"
                                                placeholder="Last Name"
                                                value={ln}
                                                onChange={(val) => {
                                                    setln(val.target.value)

                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="form-outline mb-4 ">

                                    <input
                                        type="email"
                                        id="form1Example13"
                                        class="form-control form-control-lg "
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(val) => {
                                            setemail(val.target.value)

                                        }}
                                    />

                                </div>

                                <div class="form-outline mb-4">
                                    <input
                                        type="password"
                                        id="form1Example23"
                                        class="form-control form-control-lg"
                                        placeholder="Password"
                                        value={pw}
                                        onChange={(val) => {
                                            setpw(val.target.value)

                                        }}
                                    />

                                </div>



                                <button
                                    type="submit"
                                    class="btn btn-primary btn-lg btn-block"
                                    onClick={handleRegister}>
                                    Register
                                        </button>

                                <p class="small fw-bold mt-2 pt-1 mb-0 f5">Already have an account?
                                <Link to='/login'>
                                        <a href="#!"
                                            class="link-danger">Sign In</a>
                                    </Link>
                                </p>




                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}


export default Register