import './dashboard.css';
import React from 'react'
// import Search from './searchBar';


export default function Dashboard(){
    return(
        <div className="dashboard">
            {/* <Search/> */}
            <main>
                <h1>DashBoard</h1>
                <nav className="outerBox">
                    <button>Overview</button>
                    <button>Company Profile</button>
                    <button>Service / Pricing</button>
                    <button>Dispatching Preferences</button>
                    <button>Impound Preferences</button>
                    <button>Add Vehical</button>
                    <button>Update Gas / Milage</button>
                    <button>Reports</button>
                    <button>Settings</button>
                </nav>
            </main>
        </div>
    )
}