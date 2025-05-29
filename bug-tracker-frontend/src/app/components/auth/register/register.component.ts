import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <h2>Register</h2>
    <form (ngSubmit)="register()">
      <div>
        <label>Name:</label>
        <input type="text" [(ngModel)]="name" name="name" required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" [(ngModel)]="email" name="email" required />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" [(ngModel)]="password" name="password" required />
      </div>
      <div>
        <label>Role:</label>
        <select [(ngModel)]="role" name="role" required>
          <option value="DEVELOPER">Developer</option>
          <option value="QA">QA</option>
          <option value="MANAGER">Manager</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  `,
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  role = 'DEVELOPER';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    };

    this.auth.register(user).subscribe({
      next: (res) => {
        this.auth.saveToken(res.token);
        this.router.navigate(['/dashboard']);
      },
      error: () => alert('Registration failed')
    });
  }
}
