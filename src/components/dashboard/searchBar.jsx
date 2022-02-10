import React from 'react'
import './dashboard.css'

export default function Search(){
    return(
        <div id="veryTop">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" id="lookout" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" id="searchBut" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}