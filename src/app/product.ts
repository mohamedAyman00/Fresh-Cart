export interface Product {

    imageCover: string;
    _id: string;
    title: string;
    category: { name: string; };
    price: number;
    ratingsAverage: number;
}
