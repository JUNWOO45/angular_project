import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(http: HttpClient) { 
    http.get('http://jsonplaceholder.typicode.com/posts')
      .subscribe(res => {
        console.log('res : ', res);
        this.posts = res;
      })
  }

  ngOnInit() {
  }

}
