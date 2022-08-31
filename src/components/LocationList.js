import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const LocationList = () => {
    // const handleMouseEnter = e => {
    //     e.target.style.color = "grey"
    //   }
    //   const handleMouseLeave = e => {onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    //     e.target.style.color = "maroon"
    //   }
    
    const [locations, setLocations] = useState([]);
    const arr = Array.from({ length: 100 }, (v, i) =>  i + 1);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location/${arr}`)
            .then(res => res.json())
            .then( result => {
                setLocations(result);
            });
    }, []);

    return (
        <>
        <h3>Locations:</h3>
        <section className ="locations">
            
            {locations.map((x, i) => <>
            <div className = "blockLocation">
                <h4 className="locationName">{i+1}. {x.name}</h4>
                <p>Type: {x.type}</p>
                <p>Dimension: {x.dimension}</p>
                <p><Link className="see" key={x.name} to={`/location/${i + 1}`}>View residents</Link></p>
            </div>
            </>)}   
        </section>
        </>
    )
}

export default LocationList;
