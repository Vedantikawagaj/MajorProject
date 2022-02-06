import React, { Component } from 'react'
import Login from './Login'
import Navbar from './Navbar'

export default class LoginPage extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Login/>
            </div>
        )
    }
}
