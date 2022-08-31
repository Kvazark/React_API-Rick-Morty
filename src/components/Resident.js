import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Resident = ({
    residents
}) => {
    const { residentId } = useParams();
    const [resident, setResident] = useState({});

    useEffect(() => {
        const url = residents[Number(residentId) - 1];
        if (url) {
            fetch(url)
                .then(res => res.json())
                .then(result => {
                    setResident(result);
                })
        }
    }, [residents, residentId])
    

    return(
        <div className='residentInf'>
            <h4><font color= "a6c1e3" >Information about resident number {residentId}:</font></h4>
            <p>This resident's name is {resident.name}, who is {resident.status}.</p>
            <p>{resident.name} is a {resident.species}.</p>
            <p>This character is created {resident.created}</p>
        </div>

    ) 
}

export default Resident;