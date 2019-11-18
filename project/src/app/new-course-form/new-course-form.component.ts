import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent implements OnInit {

  form = new FormGroup({
    topics: new FormArray([])
  });

  addToTopics(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  removeItem(topic) {
    // console.log('topic.parent.value : ', topic.parent.value);
    // console.log('this.topics.controls : ', this.topics.controls)
    const index = this.topics.controls.indexOf(topic);

    this.topics.removeAt(index);
  }


  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
