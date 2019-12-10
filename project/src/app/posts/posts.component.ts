import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Test {
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent{
  posts: any[];
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 
    http.get(this.url)
      .subscribe((res: Test) => {
        console.log('res : ', res);
        this.posts = res;
      })
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    };

    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
      .subscribe(res => {
        post['id'] = res['id'];
        this.posts.splice(0, 0, post);
        console.log(this.posts)
      })
  }

  updatePost(post) {
    this.http.patch(`${this.url}/${post.id}`, {
      response: 'YES PATCH IS SUCCEDED!'
    })
      .subscribe(res => {
        this.posts.forEach(el => {
          if(el.id === post.id) {
            el['isRead'] = true;
          }
        });

        console.log(this.posts)
      })
  }

  deletePost(post) {
    this.http.delete(`${this.url}/${post.id}`)
      .subscribe(res => {
        const index = this.posts.indexOf(post);

        this.posts.splice(index, 1);
      })
  }
}
