import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors: any;

  constructor(author: AuthorService) {
    this.authors = [...author.getAuthor()];
  }

  ngOnInit() {
  }

}
