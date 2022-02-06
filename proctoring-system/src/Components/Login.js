import React, { Component } from 'react'
import '../ComponentCSS/Login.css'
import {Link} from 'react-router-dom';
export default class Login extends Component {
    render() {
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

                                        <input type="email" id="form1Example13" className="form-control form-control-md " placeholder="Email address" />

                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" id="form1Example23" className="form-control form-control-md" placeholder="Password" />

                                    </div>

                                    <div className="d-flex justify-content-around align-items-center mb-4">

                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="form1Example3"
                                                checked
                                            />
                                            <label className="form-check-label"> Remember me </label>
                                        </div>
                                        <a href="#!">Forgot password?</a>
                                    </div>
                                    <Link to='/register'>

                                    <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
                                    </Link>
                                    <p className="small fw-bold mt-2 pt-1 mb-0 f5">Don't have an account? <a href="#!"
                                        className="link-danger">Register</a></p>




                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        )
    }
}
