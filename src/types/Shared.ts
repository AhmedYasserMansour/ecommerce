export type TLoading = 'idle' | 'pending' | 'succeeded' | 'failed';
export interface ICategory {id:number, img:string , prefix:string, title: string};
export interface IProducts {
    id:number,
    img:string ,
    prefix:string,
    title: string,
    price: number,
    cat_prefix: string,
    quantity?: number,
    max: number,
    isLiked?: boolean
    isAuth?: boolean
};
export interface IOrder {
    userId:number,
    items:IProducts[],
    subtotal: number,
};