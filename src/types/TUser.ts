import { TCart } from "./TCart";
import { TOrder } from "./TOrder";
import { TProducts } from "./TProducts";


export type TUser<TData = any> = {

    statusCode: number;

    message: string;
    
    id: number;

    firstname: string;

    lastname: string;

    password: string;

    admin: boolean;

    products: TProducts [];

    orders: TOrder [];

    cart: TCart[];
    
    data: TData;



}