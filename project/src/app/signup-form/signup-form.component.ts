import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  formTutorial = new FormGroup({
    username: new FormControl(
      '',
      [
        Validators.required,
        Validators.email,
        Validators.minLength(3),
      ]
    ),
    password: new FormControl(
      '',
      Validators.required
    ),
  });

  get username() {
    return this.formTutorial.get('username');
  }

  onSubmit(formTutorial) {
    console.log(formTutorial);
  }
}
