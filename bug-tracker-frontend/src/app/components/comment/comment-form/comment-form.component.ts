import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h3>Add Comment</h3>
    <form (ngSubmit)="submitComment()">
      <textarea [(ngModel)]="commentText" name="commentText" placeholder="Write your comment..." required></textarea>
      <br />
      <button type="submit">Post Comment</button>
    </form>
  `,
})
export class CommentFormComponent {
  commentText = '';

  submitComment() {
    console.log('Posted comment:', this.commentText);
    alert('Comment posted (mock)');
    this.commentText = '';
  }
}
