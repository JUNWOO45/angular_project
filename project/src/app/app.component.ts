import { Component } from '@angular/core';
import { onChangedNewValue } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  post = {
    title: 'hahaha',
    isFavoriteCheck: true
  };

  onChanged(eventArgs: onChangedNewValue) {
    console.log('clicked!!!');
    console.log('eventArgs.newValue : ', eventArgs.newValue);
  }
}
