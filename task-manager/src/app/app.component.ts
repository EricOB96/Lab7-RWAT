import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    RouterModule, // Import RouterModule for router-outlet
    NavbarComponent, // Import NavbarComponent
  ],
})
export class AppComponent {
  title = 'task-manager';
}
