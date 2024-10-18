"use client"
import { useState } from "react";
export default function pokeapi(){
    const [poke, setPoke]=useState([]);
    const [namePoke, setName]=useState();
    return(
        <div>
            <input id="Pokename"type="text" placeholder="Pokemon a buscar" onChange={()=>handleInputChange(event)}></input>
            <p>{namePoke}</p>
            <button onClick={()=>getPoke(namePoke)}>Buscar Pokemon</button>
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
    async function getPoke(msg){
        try{
            await fetch("https://pokeapi.co/api/v2/pokemon/"+msg)
            .then(response=>response.json())
            .then((data)=>{
                setPoke(data);
            });
        }catch{
            setPoke({name:"No existe ese pokemon"})
        }
    }
}