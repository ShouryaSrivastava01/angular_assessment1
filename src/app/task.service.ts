import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks : any[] = [
    {id:1, title:'Task1', description:'Task description', status : 'To Do'}
  ]

  constructor() { }

  getTasks():any[]{
    return this.tasks;
  }

  getTaskById(id:number): any{
    return this.tasks.find(task=>task.id===id)
  }

  addTask(task:any):void{
    this.tasks.push(task);
  }

}
