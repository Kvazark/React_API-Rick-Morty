import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, NavLink, Route, Routes } from 'react-router-dom';
import Resident from './Resident';
import styles from './Style.module.css';

const Location = () => {
    const [location, setLocation] = useState({});
    const { locationId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location/${locationId}`)
            .then(res => res.json())
            .then(result => {
                setLocation(result);
            })
            .catch(() => {
                navigate('/not-found');
            })
    }, [locationId, navigate]);
    const setNavStyle = ({isActive}) => {
        return isActive
            ? styles['active-link']
            : styles['non-active-navlink'];
    }


    return (
        <>
            <h2>Residents of the {location.name}: </h2>  
                <section className='residents'>
                    <nav>
                        <ul>
                            {location.residents?.map((x, i) => 
                            <li key={x}><NavLink className={setNavStyle} to={`character/${i + 1}`}>Resident №{i + 1} </NavLink></li> )}
                        </ul>
                    </nav>
                    <section className='residentRes'>
                        <Routes>
                            <Route path="character/:residentId" element={<Resident residents={location.residents || [] } />} />
                        </Routes>
                    </section>
                </section>
        </>
    );
};

export default Location;