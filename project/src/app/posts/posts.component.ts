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
    // console.log('ngOnInit WORKDED');
    this.service.getItems()
    .subscribe((res: Test) => {
      console.log('res : ', res);
      this.posts = res;
    }, error => {
      alert('An unexpected error occurred.');
      console.log('error : ', error);
    })
  }

  ngOnChanges() {
    // console.log('CHANGED!')
  }

  ngAfterViewInit() {
    // console.log('VIEW INIT')
  }

  ngAfterViewChecked() {
    // console.log('AFTER VIEW CHECKED')
  }

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    };
    
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.postItem(post)
      .subscribe(res => {
        post['id'] = res['id'];
      }, error => {
        this.posts.splice(0, 1);
      })
  }

  updatePost(post) {
    this.posts.forEach(el => {
      if(el.id === post.id) {
        el['isRead'] = true;
      }
    });

    this.service.putItem(post)
      .subscribe(res => {
        this.posts.forEach(el => {
          if(el.id === post.id) {
            el['isRead'] = false;
          }
        });

        console.log(this.posts);
      })
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.deleteItem(post)
      .subscribe(null, error => {
        this.posts.splice(index, 0, post);
      });
  }
}
