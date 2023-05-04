import { TProduct } from "./Tproduct"

export type TResponse<TData = any> = {
    
    statusCode : number,
    message : string ,
    id : number,
    name: string,
    description: string,
    price: number,
    quantity: number,
    image: string,
    stock: number
    data : TData
}
  

