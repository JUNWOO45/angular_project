import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  formTutorial = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  onSubmit(formTutorial) {
    console.log(formTutorial);
  }
}
