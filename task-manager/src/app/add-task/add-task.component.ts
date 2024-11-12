import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  standalone: true,
  imports: [FormsModule], // Import FormsModule for [(ngModel)]
})
export class AddTaskComponent {
  newTask: string = '';

  constructor(private taskService: TaskService) { }

  // Add a new task via the service
  addTask() {
    if (this.newTask.trim()) {
      this.taskService.addTask(this.newTask.trim()); // Add task to the shared service
      this.newTask = ''; // Clear the input field
    }
  }
}
