import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface Comment {
  id?: number;
  message: string;
  bugId: number;
  userId: number;
}

@Injectable({ providedIn: 'root' })
export class CommentService {
  private api = `${environment.apiUrl}/comments`;

  constructor(private http: HttpClient) {}

  getComments(bugId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.api}/bug/${bugId}`);
  }

  addComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(this.api, comment);
  }
}
