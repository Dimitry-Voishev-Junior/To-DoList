import { Component } from '@angular/core';
import { TaskFilter } from "../task-filter/task-filter";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-task-list',
  imports: [TaskFilter, RouterLink],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {

}
