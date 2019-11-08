import { Component } from '@angular/core';
import { onChangedNewValue } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  courses = [1,2,3,4,5];

  post = {
    title: 'hahaha',
    isFavoriteCheck: true
  };

  onChanged(eventArgs: onChangedNewValue) {
    console.log('clicked!!!');
    console.log('eventArgs.newValue : ', eventArgs.newValue);
  }
}
