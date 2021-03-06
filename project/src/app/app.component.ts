import { Component } from '@angular/core';
import { onChangedNewValue } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  courses = [1,2,3,4];
  viewModel='map'
  list = [
    {
      id: 0,
      name: 'junwoo'
    },
    {
      id: 1,
      name: 'gaon'
    },
    {
      id: 2,
      name: 'yeoul'
    }
  ];

  post = {
    title: 'hahaha',
    isFavoriteCheck: true
  };

  onChanged(eventArgs: onChangedNewValue) {
    console.log('clicked!!!');
    console.log('eventArgs.newValue : ', eventArgs.newValue);
  }

  changeViewMode($event) {
    this.viewModel = $event;
  }

  requestList() {
    this.list = [
      {
        id: 0,
        name: 'junwoo'
      },
      {
        id: 1,
        name: 'gaon'
      },
      {
        id: 2,
        name: 'yeoul'
      },
      {
        id: 3,
        name: 'hello'
      }
    ]
  }

  trackItem(index, item) {
    return item ? item.id : undefined;
  }
}
