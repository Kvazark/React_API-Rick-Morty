import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Episode = ({
    episodes
}) => {
    const { episodeId } = useParams();
    const [episode, setEpisode] = useState({});

    useEffect(() => {
        const url = episodes[Number(episodeId) - 1];
        if (url) {
            fetch(url)
                .then(res => res.json())
                .then(result => {
                    setEpisode(result);
                })
        }
    }, [episodes, episodeId])

    return (<>
    <div className='episodeInf'>
        <h3>Information about meeting number {episode.id}:</h3>
        <p>Episode: <font color="#32fcda">{episode.episode}</font></p>
        <p>Episode title: <font color="#32fcda">{episode.name}</font></p>
        <p>Air data: <font color="#32fcda">{episode.air_date}</font></p>
    </div> 
    </>)
}

export default Episode;
