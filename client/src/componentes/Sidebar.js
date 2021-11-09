import {NavLink} from 'react-router-dom';
import * as Faicons from 'react-icons/fa'

const Sidebar = () => {
    return (
        <div className="sidebar bg-light">
            <ul>
                <li>
                    <NavLink to = "/" className="text-dark rounded py-2 w-100 d-inline-block px-3" 
                    activeClassName="active"><Faicons.FaHome className="me-2"/>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to ="/ventas" className="text-dark rounded py-2 w-100 d-inline-block px-3" 
                    activeClassName="active"><Faicons.FaChartArea className="me-2"/>Ventas</NavLink>
                </li>
                <li>
                    <NavLink to="/clientes" className="text-dark rounded py-2 w-100 d-inline-block px-3" 
                    activeClassName="active"><Faicons.FaUserFriends className="me-2"/>Clientes</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;