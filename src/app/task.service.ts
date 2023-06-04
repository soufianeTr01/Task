import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private t1:Task[]=[];


  constructor() { }

  getTasks():Task[]{
      return this.t1;
  }
  addTask(task:Task):void{
    this.t1.push(task)
  }
  updateTask(task:Task):void{
   let index= this.t1.findIndex(t=>t.id===task.id)
   if(index!==-1){
    this.t1[index]=task
   }
  }
  delTask(task:Task):void{
    let index= this.t1.findIndex(t=>t.id===task.id)
    if(index!==-1){
     this.t1.splice(index,1)
    }
  }
}
