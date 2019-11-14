import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
  static cannotContainSpace(control: AbstractControl) : ValidationErrors{
    if((control.value as string).indexOf(' ') >= 0) {
      return {
        // minlength: {
        //   requiredLength: 15,
        //   actualLength: control.value.length
        // },
        cannotContainSpace: true
      }
    }

    return null;
  }
}
