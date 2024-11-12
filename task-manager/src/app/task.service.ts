import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This makes the service available application-wide
})
export class TaskService {
  private tasks: { id: number; name: string; done: boolean }[] = [
    { id: 1, name: 'Make tasks for today', done: false },
    { id: 2, name: 'Build a Task Manager', done: false },
  ];

  // Get all tasks
  getTasks() {
    return this.tasks;
  }

  // Add a new task
  addTask(taskName: string) {
    const newTask = {
      id: this.tasks.length + 1,
      name: taskName,
      done: false,
    };
    this.tasks.push(newTask);
  }

  // Delete a task by ID
  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }
}
