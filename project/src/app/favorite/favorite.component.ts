import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isFavorite123:boolean = true;
  @Output() change = new EventEmitter;

  constructor() { }

  onClick() {
    this.change.emit({ newValue: 'hello WORLD!'});
    this.isFavorite123 = !this.isFavorite123;
  }
}

export interface onChangedNewValue {
  newValue: string
}
