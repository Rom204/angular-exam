// All logical operations of the backend folder will displayed here.
// importations 
import dal from "../Utils/dal_mysql"
import { OkPacket } from "mysql";
import { CustomerModel } from "../Models/customersModel";


// functions( async / await ) for getting data from DB
const getAllCustomers = async (): Promise<CustomerModel> => {
    // command line for the DB
    const sql = `
        SELECT * FROM task_app.customers
    `;

    // const sql2 =`
    //     SELECT SCHEMA_NAME.TABLE_NAME1.*, SCHEMA_NAME.TABLE_NAME2.field_you want to add AS how_the_field_will_be_displayed
    //     FROM SCHEMA_NAME.TABLE_NAME1 JOIN TABLE_NAME2
    //     ON SCHEMA_NAME.TABLE1.on_wanted_field = TABLE_NAME2.id
    // `;
    // a promise function that connects us to the database with the command line
    const customers = await dal.execute(sql);
    return customers;
}

// const getSingleFunction = async (id: number): Promise<ProductModel> => {
//     // command line for the DB
//     const sql = `
//         SELECT * FROM SOMETHING WHERE id = ${id}
//     `;
//     const something = await dal.execute(sql);
//     return something;
// }

// const postFunction = async (something: ProductModel): Promise<ProductModel> => {
//     // command line for the DB
//     const sql = `
//     INSERT INTO something VALUES
//     (DEFAULT,
//     '${something.firstName}')
//     `
//     const response : OkPacket = await dal.execute(sql);
//     something.id = response.insertId;
//     return something;

// } 


// const updateFunction = async (something: ProductModel): Promise<ProductModel> => {
//     const sql = `
//     UPDATE something 
//     SET firstName = '${something.firstName}'
//     WHERE id = ${something.id}
//     `;
//     const response : OkPacket = await dal.execute(sql);
//     return something;
// }

// const deleteFunction = async (id: number): Promise<void> => {
//     const sql = `
//     DELETE FROM something WHERE id=${id}`
//     const response = await dal.execute(sql);
    
// }

// exporting 
export default {
    getAllCustomers,
    // getSingleFunction,
    // postFunction,
    // deleteFunction,
    // updateFunction
}