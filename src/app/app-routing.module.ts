import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';


const routes : Routes = [
  { path: "", component: TaskListComponent },
    { path: "tasks", component: TaskListComponent },
    { path: "task/:id", component: TaskDetailsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class AppRoutingModule { }
