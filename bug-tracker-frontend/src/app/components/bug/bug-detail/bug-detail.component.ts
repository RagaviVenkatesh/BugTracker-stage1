import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bug-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Bug Details</h2>
    <p><strong>ID:</strong> 1</p>
    <p><strong>Title:</strong> Login issue</p>
    <p><strong>Status:</strong> Open</p>
    <p><strong>Description:</strong> User cannot log in with correct credentials.</p>
    <p><strong>Assignee:</strong> Alice</p>
  `,
})
export class BugDetailComponent {}
