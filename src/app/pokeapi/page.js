"use client"
import { useState } from "react";
export default function pokeapi(){
    const [poke, setPoke]=useState([]);
    const [namePoke, setName]=useState();
    return(
        <div>
            <input type="text" placeholder="Pokemon a buscar" onChange={()=>handleInputChange(event)}></input>
            <p>{namePoke}</p>
            <button onClick={()=>getPoke()}>Buscar Pokemon</button>
            <ul>
                <li>
                    {poke.name}
                </li>
            </ul>
        </div>
    )
    function handleInputChange(e){
        setName(e.target.value);
    }
    async function getPoke(){
        await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then(response=>response.json())
        .then((data)=>{
            setPoke(data);
        });
    }
}