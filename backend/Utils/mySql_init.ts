import dal from "./dal_mysql";

const create_products_table =`
    CREATE TABLE IF NOT EXISTS products.products (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    price DECIMAL(6,2) NULL,
    PRIMARY KEY (id));
`;

const create_customers_table = `
    CREATE TABLE IF NOT EXISTS task_app.customers (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NULL,
    profession VARCHAR(45) NULL,
    telephone VARCHAR(45) NULL,
    email VARCHAR(45) NULL,
    PRIMARY KEY (id));
`;

const create_tasks_table = `
    CREATE TABLE IF NOT EXISTS task_app.tasks (
    id INT NOT NULL AUTO_INCREMENT,
    info VARCHAR(45) NULL,
    created_at DATE NULL,
    customer_id INT NULL,
    status TINYINT NULL,
    PRIMARY KEY (id));
`;


const mysql_create_table = () => {
    dal.execute(create_customers_table);
    dal.execute(create_tasks_table);
}; 


export default mysql_create_table