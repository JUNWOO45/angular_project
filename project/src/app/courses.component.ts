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

  <input type="text" [(ngModel)]="myEmail" (keyUp.enter)="twoWayBinding()">
  <br><br><br>
  <div>
    {{ course.title | uppercase }} <br>
    {{ course.rating }} <br>
    {{ course.students | number}} <br>
    {{ course.price | currency }} <br>
    {{ course.date | date:'yy:MM:dd'}} <br>
  </div>
  <br><br><br>
  `
})
export class CoursesComponent {
  title="이거슨 제목";
  courses;
  myEmail = "junwoo@gmail.com";
  course = {
    title: 'my name is junwoo',
    rating: 127.0235,
    students: 2039123,
    price: 7.28938,
    date: new Date(2019, 10, 30)
  };

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onKeyUp(value) {
    console.log('value : ', value);
  }

  onClick(value) {
    console.log('value : ', value);
  }

  twoWayBinding() {
    console.log('EMAIL : ', this.myEmail)
  }
}
