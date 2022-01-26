import './dashboard.css';
import Buttons from './sides';
import MainTabs from './mainComp';

export default function Dashboard(){
    return(
        <div className="dashboard">
            <header>
                <h1>Dashboard</h1>
            </header>
            <aside>
                <Buttons title="Overview"/>
                <Buttons title="Company Profile"/>
                <Buttons title="Service/ Pricing"/>
                <Buttons title="Dispatching Preferences"/>
                <Buttons title="Impound Preferences"/>
                <Buttons title="Settings"/>
            </aside>
            <main>
                <MainTabs/>
                {/* <div className="dashOption">Add Vehicle</div>
                <div className="dashOption">Update Gas/Milage</div>
                <div className="dashOption">Reports</div> */}
            </main>
        </div>
    )
}