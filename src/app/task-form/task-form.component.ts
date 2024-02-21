import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  task = {
    id: 0,
    title:'',
    description:'',
    status:''
  }

  constructor(private taskService : TaskService){}


  onSubmit():void{
    if(this.task.title.length<=0 || this.task.description.length<=0 || this.task.status.length<=0) {
      alert("invalid input")
      return
    }
    console.log("emitted")
    this.taskService.addTask({...this.task, id: this.generateId()})
  }

  private generateId():number{
    return Math.floor(Math.random()*1000)+1
  }

}
