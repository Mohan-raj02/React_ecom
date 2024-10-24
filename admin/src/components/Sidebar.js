import './Sidebar.css'
import { Link } from "react-router-dom"


export default function Sidebar(){ 
    return <>
        <div className="sideBarMenu">
            <h1>
                Admin Panel
            </h1>
                <ul>
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/orders'>orders</Link></li>
                    <li><Link to='/details'>details</Link></li>
                </ul>
        </div>
    </>
}