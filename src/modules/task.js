import {v4 as uuidv4} from 'uuid';

export class Task {
  constructor(title, description, dueDate, priority, projectID) {
    this._title = title;
    this._taskID = uuidv4();
    this._description = description;
    this._dueDate = dueDate;
    this._priority = priority;
    this._projectID = projectID;
  }

  get title() {
    return this._title;
  }

  set title(title) {
    this._title = title;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    this._dueDate = value;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }

  get projectID(){
    return this._projectID;
  }

  set projectID(value){
    this._projectID = value;
  }
  get taskID(){
    return this._taskID;
  }

  set taskID(value){
    this._taskID = value;
  }
}

