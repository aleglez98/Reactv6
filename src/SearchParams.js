import { useState, useEffect } from "react";
import "babel-polyfill";
import useBreedList from "./useBreedList";
import Results from "./Results";


const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile" ];

const SearchParams = () => {
    const [location, setLocation] = useState("Seattle, WA");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [BREEDS] = useBreedList(animal);

    useEffect(() => {
        requestPets();
    }, []);               //Se ejecuta una sola vez
    //}, [animal]);       //Cuando animal cambie, se ejecutara useEffect

    async function requestPets() {
        const rest = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );

        const json = await rest.json();
        console.log(json);

        setPets(json.pets);
    }
    
    return (
        <div className="search-params">
            <form 
                onSubmit={ e => {
                    e.preventDefault();
                    requestPets();
                }}
            >
                <label htmlFor="location">
                    location
                    <input 
                        id="location"
                        onChange={(e) => setLocation(e.target.value)}
                        value={location}
                        placeholder="location" 
                    />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange= {e => setAnimal(e.target.value)}
                        onBlur= {e => setAnimal(e.target.value)}
                    >
                        <option />
                        {
                            ANIMALS.map(animal => (
                               <option value={animal} key={animal}>
                                   {animal}
                                </option> 
                            ))
                        }
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        id="breed"
                        value={breed}
                        onChange= {e => setBreed(e.target.value)}
                        onBlur= {e => setBreed(e.target.value)}
                    >
                        <option />   //same that <option value=""></option>
                        {
                            BREEDS.map(breed => (
                               <option value={breed} key={breed}>
                                   {breed}
                                </option> 
                            ))
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams;