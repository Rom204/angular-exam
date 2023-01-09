// All the routes that connect the the DB and client.
import express, { NextFunction, Request, Response } from 'express';
import { Tasks } from '../Utils/urls';
import customers_controller from '../Controllers/customers_controller';
import tasks_controller from '../Controllers/tasks_controller';

// generic router 
const router = express.Router();
router.get("/", async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json("tasks controller is working");
})

// gets information from DB
router.get(Tasks.getAllTasksURL, async (request: Request, response: Response, next: NextFunction) => {
    response.status(200).json(await tasks_controller.getAllTasks())
})


// // sends information to DB
router.post(Tasks.addNewTaskURL, async (request: Request, response: Response, next: NextFunction) => {
    try {
        const newTask = request.body;
        response.status(201).json(await tasks_controller.addNewTask(newTask))
    } catch (err) {
        console.log("oops", err)
    }
})


// // update information in DB
// router.put(Urls.updateSomethingURL, async (request: Request, response: Response, next: NextFunction) => {
//   const someData = request.body;
//   response.status(201).json( await logic.updateFunction(someData));
// })

// // delete information from DB
// router.delete(Urls.deleteSomethingURL, async (request: Request, response: Response, next: NextFunction) => {
//   const someData = +request.params.id;
//   response.status(204).json( await logic.deleteFunction(someData))
// })
export default router;