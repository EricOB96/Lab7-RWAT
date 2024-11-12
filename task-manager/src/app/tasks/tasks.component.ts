import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule], // Import necessary modules
})
export class TasksComponent {
  tasks: { id: number; name: string; done: boolean }[] = []; // Initialize as an empty array

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks(); // Initialize tasks after the service is ready
  }

  // Toggle task completion
  toggleTask(task: { id: number; name: string; done: boolean }) {
    task.done = !task.done;
  }

  // Delete a task
  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks();
  }
}
