import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../ComponentCSS/Navbar.css'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg navbar-expand-lg">
                    <h5 className="navbar-brand  ml2 grow-large">Proctoror</h5>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <h5 className="nav-link grow-large">Home</h5>
                            </li>
                            <li className="nav-item">
                                <Link style={{ textDecoration: 'none' }} to='/register'>
                                    <h5 className="nav-link grow-large" >Register</h5>
                                </Link>

                            </li>
                            <li className="nav-item">

                                <Link style={{ textDecoration: 'none' }} to='/'>
                                    <h5 className="nav-link grow-large">Login</h5>
                                </Link>
                            </li>

                        </ul>
                        <div className="navbar-text text-end mr2">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <h5 className="nav-link grow-large">Contact Us</h5>
                                </li>
                                <li className="nav-item">

                                    <h5 className="nav-link grow-large">FAQs</h5>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
