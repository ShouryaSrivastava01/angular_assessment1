import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { HighlightTaskDirective } from './highlight-task.directive';
import { AppRoutingModule } from './app-routing.module';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskService } from './task.service';



const appRoutes: Routes =[
    { path: "", component: TaskListComponent },
    { path: "tasks", component: TaskListComponent },
    { path: "task/:id", component: TaskDetailsComponent }
  ]

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    HighlightTaskDirective,
    TaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
