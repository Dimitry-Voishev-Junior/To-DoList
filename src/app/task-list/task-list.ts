import { Component, inject } from '@angular/core';
import { TaskFilter } from "../task-filter/task-filter";
import { TaskService } from '../services/task-service';
import { Task } from '../models/task';
import { FormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-task-list',
  imports: [TaskFilter, FormsModule, RouterLink, CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  taskService = inject(TaskService);

  tasks: Array<Task> = [];

  newTask = new Task();
  
  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  addTask() {
    this.taskService.addTask(this.newTask)

    this.newTask = new Task();
  }

  removeTask(task: Task) {
    this.taskService.removeTask(task);
  }

  updateTasks() {
    this.taskService.updateTasks();
  }

  filterTasks(filter: string) {
    if (filter !== "") {
      this.tasks = this.tasks.filter(c => c.name.includes(filter));
    }
    else {
      this.tasks = this.taskService.getTasks();
    }
  }
}
