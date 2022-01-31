import './dashboard.css';
import React, {useState} from 'react'
// import Search from './searchBar';
import Pages from './myRoutes';

export default function Dashboard(){
    const {active, setActive} = useState("FirstC")

    return(
        <div className="dashboard">
            {/* <Search/> */}
            <aside>
                <nav className="outerBox">
                    <button onClick={() => setActive("FirstC")}>Overview</button>
                    <button onClick={() => setActive("SecondC")}>Company Profile</button>
                    <button onClick={() => setActive("ThirdC")}>Service / Pricing</button>
                    <button onClick={() => setActive("FourthC")}>Dispatching Preferences</button>
                    <button onClick={() => setActive("FifthC")}>Impound Preferences</button>
                    <button onClick={() => setActive("SixthC")}>Add Vehical</button>
                    <button onClick={() => setActive("SeventhC")}>Update Gas / Milage</button>
                    <button onClick={() => setActive("EighthC")}>Reports</button>
                    <button onClick={() => setActive("NinthC")}>Settings</button>
                </nav>
            </aside>
            <main>
                <h1>DashBoard</h1>
                <Pages titles="overview"/>
                {active === "SecondC" && <Pages titles="comp"/>}
                {active === "ThirdC" && <Pages titles="service"/>}
                {active === "FourthC" && <Pages titles="dispatch"/>}
                {active === "FifthC" && <Pages titles="impound"/>}
                {active === "SixthC" && <Pages titles="vehicle"/>}
                {active === "SeventhC" && <Pages titles="gas"/>}
                {active === "EighthC" && <Pages titles="reports"/>}
                {active === "NinthC" && <Pages titles="settings"/>}
            </main>
        </div>
    )
}