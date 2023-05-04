

export type TOrder<TData = any> = {

    statusCode: number;

    message: string;

    id: number;

    adresse: string;

    totalPrice: number;

    status: string;

    data: TData



}