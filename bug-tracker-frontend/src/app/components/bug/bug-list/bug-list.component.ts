import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bug, BugService } from '../../../services/bug.service';


@Component({
  selector: 'app-bug-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Bug List</h2>
    <table *ngIf="bugs.length" border="1">
      <tr>
        <th>ID</th><th>Title</th><th>Status</th><th>Priority</th>
      </tr>
      <tr *ngFor="let bug of bugs">
        <td>{{ bug.id }}</td>
        <td>{{ bug.title }}</td>
        <td>{{ bug.status }}</td>
        <td>{{ bug.priority }}</td>
      </tr>
    </table>
  `,
})
export class BugListComponent implements OnInit {
  bugs: Bug[] = [];

  constructor(private bugService: BugService) {}

  ngOnInit() {
    this.bugService.getAllBugs().subscribe(data => {
      this.bugs = data;
    });
  }
}
