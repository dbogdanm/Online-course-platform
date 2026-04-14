import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container" style="max-width: 500px; margin-top: 4rem;">
      <div class="card">
        <h1 style="text-align: center; margin-bottom: 2rem;">Welcome Back</h1>
        <form (ngSubmit)="onLogin()">
          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; font-weight: 600; margin-bottom: 0.5rem;">Email Address</label>
            <input type="email" [(ngModel)]="credentials.Email" name="email" placeholder="name@example.com" required>
          </div>
          <div style="margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <label style="font-weight: 600;">Password</label>
              <a href="#" style="font-size: 0.875rem; color: var(--primary); text-decoration: none;">Forgot password?</a>
            </div>
            <input type="password" [(ngModel)]="credentials.Password" name="password" placeholder="••••••••" required>
          </div>
          <button type="submit" style="width: 100%; padding: 1rem; font-size: 1.125rem; margin-bottom: 1.5rem;">Log In</button>
          
          <p style="text-align: center; color: var(--text-muted);">
            Don't have an account? <a routerLink="/register" style="color: var(--primary); font-weight: 600; text-decoration: none;">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  `
})
export class LoginComponent {
  credentials = { Email: '', Password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe({
      next: () => this.router.navigate(['/']),
      error: (err) => alert('Login failed: ' + (err.error?.message || err.message))
    });
  }
}
