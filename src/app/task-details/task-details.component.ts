import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TaskService } from "../task.service";

@Component({
  selector: "app-task-details",
  templateUrl: "./task-details.component.html"
})
export class TaskDetailsComponent implements OnInit {
  task: any;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get("id");
    this.task = this.taskService.getTaskById(parseInt(taskId));

    console.log(this.task);
  }
}