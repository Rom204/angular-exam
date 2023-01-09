// All logical operations of the backend folder will displayed here.
// importations 
import { TaskModel } from "../Models/tasksModel";
import dal from "../Utils/dal_mysql"
import { OkPacket } from "mysql";


// functions( async / await ) for getting data from DB
const getAllTasks = async (): Promise<TaskModel> => {
    // command line for the DB
    // const sql = `
    //     SELECT * FROM task_app.customers
    // `;

    const sql2 =`
        SELECT task_app.tasks.*, task_app.customers.name AS customer_id
        FROM task_app.tasks JOIN task_app.customers
        ON task_app.tasks.customer_id = task_app.customers.id
    `;
    // a promise function that connects us to the database with the command line
    const customers = await dal.execute(sql2);
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

const addNewTask = async (task: TaskModel): Promise<TaskModel> => {
    // command line for the DB
    const sql = `
    INSERT INTO task_app.tasks VALUES
    (DEFAULT,
    '${task.info}',
    '${task.created_at}',
    ${task.customer_id},
    '${task.status}')
    `;
    const response : OkPacket = await dal.execute(sql);
    task.id = response.insertId;
    return task;

} 


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
    getAllTasks,
    addNewTask
    // getSingleFunction,
    // postFunction,
    // deleteFunction,
    // updateFunction
}