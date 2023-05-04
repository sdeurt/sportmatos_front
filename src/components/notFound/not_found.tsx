import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    
    const navigate = useNavigate()
    console.log(navigate);


    return (
        <div>
            <h1 className='text-center'>Wops, cette page n'existe pas.</h1>
            <button className='btn btn-center text-center rounded bg-info ' onClick={() => navigate("/accueil")} >Retourner à l'accueil</button>
            <button className=' btn btn-center text-center rounded bg-info ' onClick={() => navigate("/products")} >Retourner aux produits</button>
        </div>
    )
    
}