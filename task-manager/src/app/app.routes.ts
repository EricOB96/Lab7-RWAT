import { Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';

export const appRoutes: Routes = [
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    { path: 'tasks', component: TasksComponent },
    { path: 'add-task', component: AddTaskComponent },
];
