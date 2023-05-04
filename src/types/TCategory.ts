

export type TCategory<TData = any> = {
    
    statusCode: number;

    message: string;

    id: number;

    name: string;

    data: TData;

}