export class TaskModel {
    // * IMPORTANT *  these fields must match the same name of the columns in the DB table 
    public id: number;
    public info: string;
    public created_at: Date;
    public customer_id:number;
    public status:boolean;

    public constructor(task: TaskModel) {

        this.id = task.id;
        this.info = task.info;
        this.created_at = task.created_at;
        this.customer_id = task.customer_id;
        this.status = task.status;        
    }
}