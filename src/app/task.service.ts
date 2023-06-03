import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks:Task[]=[];


  constructor() { }

  getTasks():Task[]{
      return this.tasks;
  }
  addTask(task:Task):void{
    this.tasks.push(task)
  }
  updateTask(task:Task):void{
   let index= this.tasks.findIndex(t=>t.id===task.id)
   if(index!==-1){
    this.tasks[index]=task
   }
  }
  delTask(task:Task):void{
    let index= this.tasks.findIndex(t=>t.id===task.id)
    if(index!==-1){
     this.tasks.splice(index,1)
    }
  }
}
