import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export interface Bug {
  id?: number;
  title: string;
  description: string;
  status?: string;
  priority: string;
  assignee?: any;
}

@Injectable({ providedIn: 'root' })
export class BugService {
  private api = `${environment.apiUrl}/bugs`;

  constructor(private http: HttpClient) {}
  
  getAuthHeaders() {
  const token = localStorage.getItem('token');
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    };
  }
  getAllBugs(): Observable<Bug[]> {
    return this.http.get<Bug[]>(this.api, this.getAuthHeaders());
  }

  getBug(id: number): Observable<Bug> {
    return this.http.get<Bug>(`${this.api}/${id}`, this.getAuthHeaders());
  }

  createBug(bug: Bug): Observable<Bug> {
    return this.http.post<Bug>(this.api, bug, this.getAuthHeaders());
  }

  updateStatus(id: number, status: string): Observable<Bug> {
    return this.http.patch<Bug>(`${this.api}/${id}/status?status=${status}`, {}, this.getAuthHeaders());
  }
}
