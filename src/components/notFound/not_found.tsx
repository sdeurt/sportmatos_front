import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {

    const navigate = useNavigate()
    console.log(navigate);


    return (
        <div className='text-center'>
            <h1 className=' text-info'>Wops, cette page n'existe pas.</h1>
            <button className='btn  text-center rounded bg-info  ' onClick={() => navigate("/accueil")} >Retourner à l'accueil</button>
            <button className=' btn  text-center rounded bg-info offset-1' onClick={() => navigate("/products")} >Retourner aux produits</button>
        </div>
    )

}