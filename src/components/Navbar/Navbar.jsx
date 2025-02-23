
import ButtonDarkMode from '../buttonDarkMode/ButtonDarkMode';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
export default function Navbar(props){
    const activelink = "nav-list__link nav-list__link--active";
    const normalLink = "nav-list__link";

    return(
        <nav className="nav">
                <div className="container">
                    <div className="nav-row">
                        <NavLink to="/" className="logo">
                            <strong >Fullstack</strong> portfolio
                        </NavLink>
                        
                       <ButtonDarkMode></ButtonDarkMode>

                        <ul className="nav-list">
                            <li className="nav-list__item">
                            <NavLink className={({isActive})=>isActive ? activelink : normalLink }  
                            
                            to="/">
                                Home
                            </NavLink>
                            </li>
                            <li className="nav-list__item">
                            <NavLink className={({isActive})=>isActive ? activelink : normalLink }  to="/projects">
                                Projects
                            </NavLink>
                            </li>
                            <li className="nav-list__item">
                            <NavLink className={({isActive})=>isActive ? activelink : normalLink }  to="/contacts">
                                Contacts
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}