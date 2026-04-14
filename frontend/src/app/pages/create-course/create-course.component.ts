import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-create-course',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="container" style="max-width: 800px;">
      <div class="card">
        <h1 style="margin-bottom: 2rem; text-align: center;">Create New Course</h1>
        <form (ngSubmit)="onCreate()">
          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; font-weight: 600; margin-bottom: 0.5rem;">Course Title</label>
            <input type="text" [(ngModel)]="course.Title" name="title" placeholder="e.g. Master Angular in 30 Days" required>
          </div>
          
          <div style="margin-bottom: 1.5rem;">
            <label style="display: block; font-weight: 600; margin-bottom: 0.5rem;">Description</label>
            <textarea 
              [(ngModel)]="course.Description" 
              name="description" 
              style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border); min-height: 150px; font-family: inherit; font-size: 1rem;"
              placeholder="Provide a detailed description of what students will learn..."
              required></textarea>
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
            <div>
              <label style="display: block; font-weight: 600; margin-bottom: 0.5rem;">Category</label>
              <input type="text" [(ngModel)]="course.Category" name="category" placeholder="e.g. Programming" required>
            </div>
            <div>
              <label style="display: block; font-weight: 600; margin-bottom: 0.5rem;">Price ($)</label>
              <input type="number" [(ngModel)]="course.Price" name="price" placeholder="e.g. 49.99" required>
            </div>
          </div>
          
          <div style="display: flex; gap: 1rem; justify-content: flex-end;">
            <button type="button" routerLink="/courses" style="background: white; color: var(--text-main); border: 1px solid var(--border);">Cancel</button>
            <button type="submit">Create Course</button>
          </div>
        </form>
      </div>
    </div>
  `
})
export class CreateCourseComponent {
  course = { Title: '', Description: '', Category: '', Price: 0 };

  constructor(private courseService: CourseService, private router: Router) {}

  onCreate() {
    this.courseService.createCourse(this.course).subscribe({
      next: () => this.router.navigate(['/courses']),
      error: (err) => alert('Failed to create course: ' + (err.error?.message || err.message))
    });
  }
}
