import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav style="padding: 10px; background-color: #1976d2; color: white;">
      <a routerLink="/dashboard" style="margin-right: 10px; color: white;">Dashboard</a>
      <a routerLink="/bugs" style="margin-right: 10px; color: white;">Bugs</a>
      <a routerLink="/bugs/create" style="margin-right: 10px; color: white;">Create Bug</a>
      <a routerLink="/login" style="margin-right: 10px; color: white;">Login</a>
      <a routerLink="/register" style="color: white;">Register</a>
    </nav>
  `,
})
export class NavbarComponent {}
