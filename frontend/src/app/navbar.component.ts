import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <div class="logo">
        <a routerLink="/" style="font-size: 1.5rem; font-weight: 800; color: var(--primary); text-decoration: none;">
          LearnPremium
        </a>
      </div>
      <div class="nav-links">
        <a routerLink="/courses" routerLinkActive="active">Courses</a>
        <ng-container *ngIf="authService.isLoggedIn(); else guestLinks">
          <a routerLink="/my-courses" routerLinkActive="active">My Dashboard</a>
          <a routerLink="/create-course" routerLinkActive="active">Create Course</a>
          <button (click)="logout()" style="padding: 0.5rem 1rem;">Logout</button>
        </ng-container>
        <ng-template #guestLinks>
          <a routerLink="/login" routerLinkActive="active">Login</a>
          <a routerLink="/register" routerLinkActive="active">Register</a>
        </ng-template>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
