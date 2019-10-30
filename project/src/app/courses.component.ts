import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: "courses",
  template: `
  <h2>{{ title }}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{ course }}
    </li>
  </ul>

  <input type="text" (keyUp.enter)="onKeyUp(email.value)" #email>
  <button class="btn btn-primary" (click)="onClick(email.value)">BTN</button>
  `
})
export class CoursesComponent {
  title="이거슨 제목";
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onKeyUp(value) {
    console.log('value : ', value);
  }

  onClick(value) {
    console.log('value : ', value);
  }
}
