import { TProduct } from "../../types/Tproduct";


export function ProductView(props: { item: TProduct }) {

    const { name, description, price, quantity } = props.item;



    return (
        <>
            <div className="container truncate">
            <div className="card ">
                
            <div className=" text-white text-center p-0 m-0">
                    <p> Nom : {name}</p>
                    <p> Description: {description}</p>
                    <p> Prix : {price}</p>
                    <p> Quantité : {quantity}</p>
                    <p> Stock: {1}</p>
                </div>
          </div>
          </div>
        
</>
    )
}