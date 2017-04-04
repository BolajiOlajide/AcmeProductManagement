// create an interface for making the Products strongly typed.
// follow the naming convention of interfaces having an "I" prefix before the name
// of the interface.

export interface IProduct {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    price: number;
    description: string;
    starRating: number;
    imageUrl: string;
}
