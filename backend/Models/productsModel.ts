export class ProductModel {
    // * IMPORTANT *  these fields must match the same name of the columns in the DB table 
    public id: number;
    public name: string;
    public price: number;

    public constructor(product: ProductModel) {

        this.id = product.id;
        this.name = product.name         
        this.price = product.price         
    }
}