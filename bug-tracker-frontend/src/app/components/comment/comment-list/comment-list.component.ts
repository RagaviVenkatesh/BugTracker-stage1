import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentService, Comment } from '../../../services/comment.service';

@Component({
  selector: 'app-comment-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Comments</h3>
    <ul>
      <li *ngFor="let c of comments">{{ c.message }}</li>
    </ul>
  `
})
export class CommentListComponent implements OnInit {
  @Input() bugId!: number;
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit() {
    this.commentService.getComments(this.bugId).subscribe(data => {
      this.comments = data;
    });
  }
}
