// Main file in the SERVER 
import cors from "cors";
import express from "express";
import ErrorHandler from "./MiddleWare/route-not-found";
// import controller from "./Routes/products_route"
import config from "./Utils/config";
import mysql_create_table from "./Utils/mySql_init";
import customers_route from "./Routes/customers_route";
import tasks_route from "./Routes/tasks_route";


// create server using express
const server = express();

// creating tables inside mysql if not exists
mysql_create_table()

// cross origin platforms
server.use(cors());

// every data transfer is a json data
server.use(express.json());

// calling ROUTES 
// server.use("/products", controller)
server.use("/customers", customers_route)
server.use("/tasks", tasks_route)

// calling errors handler 
server.use("*", ErrorHandler);

//TODO: catch all errors file 

// uploading the server with matching port 
const currentPort = config.port;
server.listen(currentPort, () => {console.log(`listening on http://localhost:${currentPort}`)} )