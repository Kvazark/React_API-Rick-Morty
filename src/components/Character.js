import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Link, Route, Routes } from 'react-router-dom';
import Episode from './Episode';

const Character = () => {
    const [character, setCharacter] = useState({});
    const { characterId } = useParams();
    const navigate = useNavigate();
     //const location = useLocation();
     //console.log(location);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res => res.json())
            .then(result => {
                setCharacter(result);
            })
            .catch(() => {
                navigate('/not-found');
            })
    }, [characterId, navigate]);

    const nextProductHandler = () => {
        navigate(`/character/${Number(characterId) + 1}`);
    };
    const backProductHandler = () => {
        if(characterId != 1){
            navigate(`/character/${Number(characterId) - 1}`);
        }
        
    };

    return (
        <>
            <h2><font color="#1d5999">Information about {character.name}:</font></h2>
            <button className="buttonBack"onClick={backProductHandler}>Back</button>
            <article className="allInf">
                <section className='leftPanel'>
                    <div className= "imageInf"><img src={character.image} alt="" /></div>
                    <div className = "infBlock">
                        <div className='textInf'>
                            <p>Status: <font color="#32fcda">{character.status}</font></p>
                            <p>Gender: <font color="#32fcda">{character.gender}</font></p>
                            <p>Species: <font color="#32fcda">{character.species}</font></p>             
                        </div>
                    </div>
                </section>
                <section className='episodes'>
                    <div className='titleEpisodes'>Meetings with the character: </div>
                    <nav>
                            {character.episode?.map((x, i) => 
                            <p key={x}><Link className='meeting' to={`episode/${i + 1}`}>{i+1}. Meeting</Link></p> )}
                    </nav>
                        
                </section>
                <section>
                        <Routes>
                            <Route path="episode/:episodeId" element={<Episode episodes={character.episode || [] } />} />
                        </Routes>
                </section> 
            </article>
            <button className="buttonNext"onClick={nextProductHandler}>Next</button>
        </>
    );
};

export default Character;
