import React from 'react';
import './login.css';

export default function Login(){
    return(
        <div className="login">
            <h1>Larry's Towing</h1>
            <div>
                <span className="loginTitle">Login</span>
                    <form className="loginForm">
                        <label>User</label>
                        <input type="text" className="loginInput" placeholder="Driver" />
                        <label>Password</label>
                        <input type="password" className="loginInput" placeholder="password" />

                        <button type="submit" className="loginButton">Submit</button>

                    </form>
            </div>
        </div>
    )
}