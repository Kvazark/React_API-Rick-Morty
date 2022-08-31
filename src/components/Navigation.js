import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export default function Navigation() {
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : styles['non-active-link'];
    }

    return (
        <nav>
            <ul className = "menu">
                <li><NavLink className={setNavStyle} to="/" >Home</NavLink></li>

                <li>
                    <NavLink
                        to="/character"
                        className={setNavStyle}
                    >
                        All character
                    </NavLink>
                </li>
                {/* <li>
                    <NavLink
                        to="/characters/house/gryffindor"
                        className={setNavStyle}
                    >
                        Gryffindors
                    </NavLink>
                </li> */}
                <li><NavLink className={setNavStyle} to="/location">Locations</NavLink></li>
      

            </ul>
            <hr className = "menuLine"></hr>
        </nav>

    );
}