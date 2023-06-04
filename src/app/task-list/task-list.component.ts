import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent  implements OnInit {
  tasks:Task[]=[];
  newTitre:Task={
    titre:'',
    description:''
  }
  constructor(private  taskservice:TaskService) { }

  ngOnInit() {
   this.tasks= this.taskservice.getTasks();
  }
  addTask(){
    if(this.newTitre.titre.trim() !== ''){
      this.taskservice.addTask(this.newTitre)
      this.newTitre={
        titre:'',
        description:''
      }

    }
  }

  updateTask(tasks:Task){

      this.taskservice.updateTask(tasks)

  }

  delTask(task: Task): void {
    this.taskservice.delTask(task);
  }

}
