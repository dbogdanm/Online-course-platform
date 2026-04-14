import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); color: white; padding: 8rem 2rem; text-align: center;">
      <h1 style="font-size: 4rem; color: white; margin-bottom: 1.5rem;">Master Your Future</h1>
      <p style="font-size: 1.5rem; color: #94a3b8; max-width: 800px; margin: 0 auto 3rem;">
        Access world-class education from industry experts. Start your journey with our premium online courses today.
      </p>
      <div style="display: flex; gap: 1rem; justify-content: center;">
        <button routerLink="/courses" style="font-size: 1.25rem; padding: 1rem 2.5rem;">Browse Courses</button>
        <button routerLink="/register" style="font-size: 1.25rem; padding: 1rem 2.5rem; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);">Join for Free</button>
      </div>
    </div>
    
    <div class="container" style="margin-top: -4rem;">
      <div class="grid">
        <div class="card" style="text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎓</div>
          <h3>Expert Instructors</h3>
          <p style="color: var(--text-muted);">Learn from professionals with real-world experience in their fields.</p>
        </div>
        <div class="card" style="text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">💻</div>
          <h3>Flexible Learning</h3>
          <p style="color: var(--text-muted);">Access your lessons anytime, anywhere, on any device.</p>
        </div>
        <div class="card" style="text-align: center;">
          <div style="font-size: 2.5rem; margin-bottom: 1rem;">📜</div>
          <h3>Certificates</h3>
          <p style="color: var(--text-muted);">Earn recognized certificates upon completion of your courses.</p>
        </div>
      </div>
    </div>
  `
})
export class HomeComponent {}
