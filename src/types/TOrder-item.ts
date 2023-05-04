

export type TOrderItem<TData = any> = {
    
    statusCode: number;

    message: string;

    id: number;

    quantity: number;

    price: number;

    data: TData;

}