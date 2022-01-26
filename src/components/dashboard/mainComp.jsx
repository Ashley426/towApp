import './dashboard.css'

export default function MainTabs(props){
    return(
        <div>
            <ul class="nav nav-pills">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="{<SubTabs subTitles='Hello World'/>}">Add Vehicle</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{<SubTabs/>}">Update Gas/Milage</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="{<SubTabs/>}">Reports</a>
                </li>
            </ul>
        </div>
    )
}