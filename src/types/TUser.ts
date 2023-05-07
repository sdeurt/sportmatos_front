import { TCart } from "./TCart";
import { TOrder } from "./TOrder";
import { TProduct } from "./Tproduct";


export type TUser<TData = any> = {

    statusCode: number;

    message: string;
    
    id: number;

    firstname: string;

    lastname: string;

    password: string;

    admin: boolean;

    products: TProduct [];

    orders: TOrder [];

    cart: TCart[];
    
    data: TData;



}