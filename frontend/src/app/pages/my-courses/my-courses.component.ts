import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseService, Course } from '../../services/course.service';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h1 style="margin-bottom: 2rem;">My Learning Dashboard</h1>
      
      <div *ngIf="enrolledCourses.length > 0; else emptyState">
        <div class="grid">
          <div *ngFor="let course of enrolledCourses" class="card">
            <h3 style="margin-bottom: 1rem;">{{ course.title }}</h3>
            <div style="height: 10px; background: #e2e8f0; border-radius: 9999px; overflow: hidden; margin-bottom: 1rem;">
              <div style="width: 35%; height: 100%; background: var(--primary);"></div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.875rem; color: var(--text-muted);">35% Complete</span>
              <button [routerLink]="['/courses', course.id]" style="padding: 0.5rem 1rem;">Continue</button>
            </div>
          </div>
        </div>
      </div>
      
      <ng-template #emptyState>
        <div class="card" style="text-align: center; padding: 4rem;">
          <h2 style="color: var(--text-muted); margin-bottom: 1rem;">You haven't enrolled in any courses yet.</h2>
          <p style="margin-bottom: 2rem;">Start your learning journey today by browsing our curated course list.</p>
          <button routerLink="/courses" style="font-size: 1.125rem;">Explore Courses</button>
        </div>
      </ng-template>
    </div>
  `
})
export class MyCoursesComponent implements OnInit {
  enrolledCourses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {
        this.enrolledCourses = data.slice(0, 2);
    });
  }
}
