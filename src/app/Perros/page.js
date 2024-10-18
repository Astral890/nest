"use client"
import { useEffect, useState } from "react"
export default function Perritos(){
    const [perrito, setPerro]=useState([]);
    useEffect(()=>{
        getPerro();
    },[])
    return(
        <div>
            <img src={perrito.message}></img>
            <button onClick={()=>getPerro()}>Nuevo perrito</button>
        </div>  
    )
    function getPerro(){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response=>response.json())
        .then((data)=>{
            setPerro(data);
    })}
}