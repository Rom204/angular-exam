// URL'S definitions.
class Urls {
    public static getAllSomethingURL = "/all";
    public static getSingleSomethingURL = "/:id";
    public static addSomethingURL = "/add";
    public static deleteSomethingURL = "/:id";
    public static updateSomethingURL = "/add";
}

class Products {
    public static getAllProductsURL = "/api/all";
}

class Customers {
    public static getAllCustomersURL = "/api/all";

}

class Tasks {
    public static getAllTasksURL = "/api/all";
    public static addNewTaskURL = "/api/add";

}

export {
    Urls,
    Products,
    Customers,
    Tasks
} ;