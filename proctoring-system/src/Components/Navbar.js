import React, { Component } from 'react'
import '../ComponentCSS/Navbar.css'
export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg navbar-expand-lg">
                    <a className="navbar-brand  ml2 grow-large" href="#">Proctoror</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link grow-large" href="#">Home</a>
                            </li>
                            <li className="nav-item">

                                <a className="nav-link grow-large" href="#">Register</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link grow-large" href="#">Login</a>
                            </li>

                        </ul>
                        <div className="navbar-text text-end mr2">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <a className="nav-link grow-large" href="#">Contact Us</a>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link grow-large" href="#">FAQs</a>
                                </li>
                                

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
