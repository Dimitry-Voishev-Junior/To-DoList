import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../models/task';
import { TaskService } from '../services/task-service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-task-details',
  imports: [FormsModule],
  templateUrl: './task-details.html',
  styleUrl: './task-details.css',
})
export class TaskDetails {
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute);
  taskService = inject(TaskService);

  task?: Task;

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id === null) {
      this.navigateBack();
    }
    else {
      this.task = this.taskService.getById(+id);

      if (this.task === undefined) {
        this.navigateBack();
      }
    }
  }

  save() {
    this.taskService.updateTasks();
    
    this.navigateBack();
  }

  cancel() {
    this.navigateBack();
  }

  private navigateBack() {
    this.router.navigate(['/taskList'], { relativeTo: this.activatedRoute })
  }
}
