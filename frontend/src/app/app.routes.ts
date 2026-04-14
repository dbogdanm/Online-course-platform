import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'login', loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
  { path: 'courses', loadComponent: () => import('./pages/courses/course-list.component').then(m => m.CourseListComponent) },
  { path: 'courses/:id', loadComponent: () => import('./pages/course-detail/course-detail.component').then(m => m.CourseDetailComponent) },
  { path: 'my-courses', loadComponent: () => import('./pages/my-courses/my-courses.component').then(m => m.MyCoursesComponent) },
  { path: 'create-course', loadComponent: () => import('./pages/create-course/create-course.component').then(m => m.CreateCourseComponent) },
];
