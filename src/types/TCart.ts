import { TProduct } from "./Tproduct";


export type TCart = {
    
    id: number;

    userId: number;

    totalPrice: number;

    cartItems: TProduct;

    date: Date; 


}