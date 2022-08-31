import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const CharacterList = () => {
    // const handleMouseEnter = e => {
    //     e.target.style.color = "grey"
    //   }
    //   const handleMouseLeave = e => {onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
    //     e.target.style.color = "maroon"
    //   }
    
    const [characters, setCharacters] = useState([]);
    const arr = Array.from({ length: 180 }, (v, i) =>  i + 1);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${arr}`)
            .then(res => res.json())
            .then( result => {
                setCharacters(result);
            });
    }, []);

    return (
        <>
        <h3>Characters:</h3>
        <section className ="heros">
            
            {characters.map((x, i) => <>
            <div className = "card" ><h4 className="nameCharacter">{x.name}</h4>
            <div><Link className="seeCharacter" key={x.name} to={`/character/${i + 1}`}>See more</Link></div>
            <div className = "image"><img src={x.image} alt="" />
            </div>
            
            </div> 
            </>)}
           
        </section>
        </>
    )
}

export default CharacterList;
