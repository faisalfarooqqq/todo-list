
import { v4 as uuidv4 } from 'uuid';


export class Project {
  constructor(title) {
    this._title = title;
    this._projectID = title === 'Home' ? 'defaultHomeProjectID' : uuidv4();
    this._tasks = [];
  }

  // Getter and setter for title
  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get projectID(){
    return this._projectID;
  }

  set projectID(value){
    this._projectID = value;
  }



  addTask(task) {
    
    this._tasks.push(task);
 }
 
 
  // Method to get all tasks in the project
  getTasks() {
    return this._tasks;
  }
}

