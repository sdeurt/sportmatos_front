export type TCartItem <TData = any> = {
    
    statusCode: number;

    message: string;

    id: number;

    quantity: number;

    cartId: number;

    productId: number;

    data: TData;

}