import React, { useEffect, useState } from 'react'
import "./cart.css";
import { Link } from 'react-router-dom';
import { TProduct } from '../../types/Tproduct';




type TProps = {
    product: TProduct;
    delItem: (item: TProduct) => void;
}

export default function Cart() {

  
    const [totalPrice, setTotalPrice] = useState()

    const handleClose = (item: any) => {
    }




    const cartItems = (item: { id:number, name: string, price: number, quantity: number }) => {
        return (
            <div className="px-4 my-5 bg-light rounded-3" key={item.id}>
                <div className="container py-4">
                    <button onClick={() => handleClose(item)} className="btn-close float-end" aria-label="Close"></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={`./imgsport/${item.name}.jpg`} height="200px" width="180px" />
                        </div>
                        <div className="col-md-4">
                            <h3>{item.name}</h3>
                            <p className="lead fw-bold">${item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className="px-4 my-5 bg-light rounded-3 py-5">
                <div className="container py-4">
                    <div className="row">
                        <h3>Votre panier est plein</h3>
                    </div>
                </div>
            </div>
        );
    }

    const button = () => {
        return (
            <div className="container">
                <div className="row">
                    <Link to="/panier" className="btn btn-outline-primary mb-5 w-25 mx-auto">Procéder au paiement</Link>
                </div>
            </div>
        );
    }

    return (
        <>
           {/*  <p>{state.lenght } test</p>
            {state.length === 0 && emptyCart()}
            {state.length !== 0 && state.map(cartItems)}
            {state.length !== 0 && button()} */}
        </>
    );

}






function delItem(item: any): any {
    throw new Error('Function not implemented.');
}

