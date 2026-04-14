import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CourseService, Course } from '../../services/course.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container" *ngIf="course">
      <div style="background: white; border-radius: 12px; padding: 3rem; border: 1px solid var(--border); box-shadow: var(--shadow);">
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem;">
          <span class="badge">{{ course.category }}</span>
          <span class="badge" style="background: #ecfdf5; color: #065f46;">Premium Course</span>
        </div>
        <h1 style="font-size: 3rem; margin-bottom: 1.5rem;">{{ course.title }}</h1>
        <p style="font-size: 1.25rem; color: var(--text-muted); margin-bottom: 2rem;">
          {{ course.description }}
        </p>
        
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 3rem; align-items: start;">
          <div>
            <h3>Course Curriculum</h3>
            <p style="margin-bottom: 1rem;">Unlock access to all lessons including video content and interactive quizzes.</p>
            <div style="border: 1px solid var(--border); border-radius: 8px; overflow: hidden;">
              <div style="padding: 1rem; border-bottom: 1px solid var(--border); background: #f8fafc;">Lesson 1: Introduction to {{ course.title }}</div>
              <div style="padding: 1rem; border-bottom: 1px solid var(--border); color: var(--text-muted);">Lesson 2: Core Concepts</div>
              <div style="padding: 1rem; color: var(--text-muted);">Lesson 3: Advanced Implementation</div>
            </div>
          </div>
          
          <div class="card" style="position: sticky; top: 6rem; background: var(--background);">
            <div style="font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem;">{{ course.price === 0 ? 'Free' : '$' + course.price }}</div>
            <button style="width: 100%; padding: 1rem; font-size: 1.125rem; margin-bottom: 1rem;">Enroll Now</button>
            <p style="font-size: 0.875rem; color: var(--text-muted); text-align: center;">Full lifetime access and 30-day money back guarantee.</p>
          </div>
        </div>
      </div>
    </div>
  `
})
export class CourseDetailComponent implements OnInit {
  course: Course | null = null;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.courseService.getCourseById(id).subscribe(data => this.course = data);
    }
  }
}
