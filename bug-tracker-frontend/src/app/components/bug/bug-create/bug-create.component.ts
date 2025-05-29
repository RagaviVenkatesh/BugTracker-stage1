import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { BugService, Bug } from '../../../services/bug.service';

@Component({
  selector: 'app-bug-create',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Create Bug</h2>
    <form (ngSubmit)="submit()">
      <input [(ngModel)]="bug.title" name="title" placeholder="Title" required />
      <textarea [(ngModel)]="bug.description" name="description" placeholder="Description" required></textarea>
      <select [(ngModel)]="bug.priority" name="priority">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  `
})
export class BugCreateComponent {
  bug: Bug = {
    title: '',
    description: '',
    priority: 'Medium'
  };

  constructor(private bugService: BugService, private router: Router) {}

  submit() {
    this.bugService.createBug(this.bug).subscribe(() => {
      alert('Bug created successfully!');
      this.router.navigate(['/bugs']);
    });
  }
}
