import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container" style="max-width: 500px; margin-top: 4rem;">
      <div class="card">
        <h1 style="text-align: center; margin-bottom: 2rem;">Create Account</h1>
        <form (ngSubmit)="onRegister()">
          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; font-weight: 600; margin-bottom: 0.5rem;">Username</label>
            <input type="text" [(ngModel)]="user.Username" name="username" placeholder="Pick a unique username" required>
          </div>
          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; font-weight: 600; margin-bottom: 0.5rem;">Email Address</label>
            <input type="email" [(ngModel)]="user.Email" name="email" placeholder="name@example.com" required>
          </div>
          <div style="margin-bottom: 2rem;">
            <label style="display: block; font-weight: 600; margin-bottom: 0.5rem;">Password</label>
            <input type="password" [(ngModel)]="user.Password" name="password" placeholder="Min. 4 characters" required>
          </div>
          <button type="submit" style="width: 100%; padding: 1rem; font-size: 1.125rem; margin-bottom: 1.5rem;">Create Account</button>
          
          <p style="text-align: center; color: var(--text-muted);">
            Already have an account? <a routerLink="/login" style="color: var(--primary); font-weight: 600; text-decoration: none;">Log In</a>
          </p>
        </form>
      </div>
    </div>
  `
})
export class RegisterComponent {
  user = { Username: '', Email: '', Password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.user).subscribe({
      next: () => this.router.navigate(['/login']),
      error: (err) => {
        let errorMsg = 'Registration failed: ';
        if (err.error && Array.isArray(err.error)) {
          errorMsg += err.error.map((e: any) => e.description).join(', ');
        } else {
          errorMsg += (err.error?.message || err.message);
        }
        alert(errorMsg);
      }
    });
  }
}
