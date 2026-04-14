import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseService, Course } from '../../services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h1>Explore Courses</h1>
        <span class="badge">{{ courses.length }} Courses Available</span>
      </div>
      
      <div class="grid">
        <div *ngFor="let course of courses" class="card">
          <div class="badge" style="margin-bottom: 0.5rem;">{{ course.category }}</div>
          <h3 style="margin-bottom: 0.5rem;">{{ course.title }}</h3>
          <p style="color: var(--text-muted); font-size: 0.875rem; margin-bottom: 1.5rem; height: 3rem; overflow: hidden;">
            {{ course.description }}
          </p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: 700; font-size: 1.25rem;">{{ course.price === 0 ? 'Free' : '$' + course.price }}</span>
            <button [routerLink]="['/courses', course.id]" style="padding: 0.5rem 1rem;">View Details</button>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => this.courses = data);
  }
}
