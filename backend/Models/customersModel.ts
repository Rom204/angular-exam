export class CustomerModel {
    // * IMPORTANT *  these fields must match the same name of the columns in the DB table 
    public id: number;
    public name: string;
    public profession: string;
    public telephone: string;
    public email:string;

    public constructor(customer: CustomerModel) {

        this.id = customer.id;
        this.name = customer.name         
        this.profession = customer.profession
        this.telephone = customer.telephone
        this.email = customer.email    
    }
}