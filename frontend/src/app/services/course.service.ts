import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  instructorName: string;
}

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:5295/api/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  getCourseById(id: string): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`);
  }

  createCourse(course: any): Observable<Course> {
    const token = localStorage.getItem('token');
    return this.http.post<Course>(this.apiUrl, course, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }

  getMyEnrolledCourses(): Observable<Course[]> {
    const token = localStorage.getItem('token');
    return this.http.get<Course[]>(`${this.apiUrl}/enrolled`, {
        headers: { Authorization: `Bearer ${token}` }
    });
  }
}
