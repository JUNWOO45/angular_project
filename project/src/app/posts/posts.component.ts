import { Component, OnInit, OnChanges, AfterViewChecked } from '@angular/core';
import { PostService } from '../services/post.service';

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
export class PostsComponent implements OnInit, OnChanges, AfterViewChecked, AfterViewInit {
  posts: any[];
  

  constructor(private service: PostService) { 
    console.log('constructor WORKDED');
  }

  ngOnInit() {
    console.log('ngOnInit WORKDED');
    this.service.getItems()
    .subscribe((res: Test) => {
      console.log('res : ', res);
      this.posts = res;
    })
  }

  ngOnChanges() {
    console.log('CHANGED!')
  }

  ngAfterViewInit() {
    console.log('VIEW INIT')
  }

  ngAfterViewChecked() {
    console.log('AFTER VIEW CHECKED')
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    };

    input.value = '';

    this.service.postItem(post)
      .subscribe(res => {
        post['id'] = res['id'];
        this.posts.splice(0, 0, post);
        console.log(this.posts)
      })
  }

  updatePost(post) {
    this.service.putItem(post)
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
    this.service.deleteItem(post)
      .subscribe(res => {
        const index = this.posts.indexOf(post);

        this.posts.splice(index, 1);
      })
  }
}
