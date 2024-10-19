"use client"
import { useState } from "react";
export default function pokeapi(){
    const [poke, setPoke]=useState([]);
    const [namePoke, setName]=useState();
    console.log(poke.sprites);
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-white text-xl font-semibold mb-4">Buscar Pokemón</h2>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
                    <input  className="border border-gray-300 rounded-md p-2 w-full mb-2 text-black" type="text" placeholder="Pokemon a buscar" onChange={()=>handleInputChange(event)}></input>
                    <button className="bg-blue-500 text-white rounded-md px-4 py-2 transition-colors hover:bg-blue-600" onClick={()=>getPoke(namePoke.toLowerCase())}>Buscar Pokemon</button>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    {poke.length===0?(
                        <p className="text-gray-800">Ingresa un pokemon</p>
                    ):(
                    <div>
                        <img className="w-32 h-32 object-contain border border-gray-300 rounded-md" src={poke.sprites.front_default}></img>
                        <ul className="list-disc pl-5 text-gray-600">
                            <li> 
                                Nombre: {poke.name}
                            </li>
                            <li>
                                Tipo/s: {poke.types[0].type.name} {poke.types[1]?", "+poke.types[1].type.name:""}
                            </li>
                        </ul>
                    </div>
                    )}
                </div>
            </div>
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
            console.log("No existe")
        }
    }
}