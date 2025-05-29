import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Dashboard</h2>
    <p>Welcome to the Bug Tracker Dashboard.</p>
    <p>Use the navigation links above to view or create bugs.</p>
  `,
})
export class DashboardComponent {}
