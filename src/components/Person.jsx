import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Person = () => {
// Create a const that can be used to store the API response

    const[person,setPerson] = useState([])
    const [planet,setPlanet] = useState([])


    const {type,id} = useParams()
// making type and ID variables that are changing due to the input of our form 

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${type}/${id}`)
// Type is getting the input from our from and what has been searched to be implemented in its search
            .then(result => {
                console.log(result.data);
            setPerson(result.data)
            setPlanet(result.data)
            })
            .catch(error => console.log('oops theres a mistake'))

    },[type,id])
// keeping it the same after to get a response



    return (
        <fieldset>
        { 
            type === "people" ? (
                <div>

                <p>{person.name}</p>
                <p>Height: {person.height} </p>
                <p>Mass :{person.mass}</p>
                <p>Hair Color : {person.hair_color}</p>
                <p>Skin tone: {person.skin_color}</p>
                </div>

            ):<div>
                <h2>{planet.name}</h2>
                <p>Population: {planet.population}</p>
                <p>Climate: {planet.climate}</p>
                <p>Surface: {planet.surface_water}</p>
            </div>
        }
        </fieldset>
    )
}

export default Person