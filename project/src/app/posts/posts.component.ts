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
export class PostsComponent implements OnInit, OnChanges, AfterViewChecked {
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

  createPost(input: HTMLInputElement) {
    let post = {
      title: input.value
    };
    
    this.posts.splice(0, 0, post);
    input.value = '';

    this.service.postItem(post)
      .subscribe(
        res => {
          post['id'] = res['id'];
        }, 
        (error: Response) => {
          if(error.status === 400) {
            alert('400 ERRORS.....');
          }
          this.posts.splice(0, 1);
        });
  }

  updatePost(post) {
    this.posts.forEach(el => {
      if(el.id === post.id) {
        el['isRead'] = true;
      }
    });

    this.service.putItem(post)
      .subscribe(
        res => {
          this.posts.forEach(el => {
            if(el.id === post.id) {
              el['isRead'] = false;
            }
          });

          console.log(this.posts);
        }, 
        error => {
          alert('An unexpected error occurred.');
        })
  }

  deletePost(post) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.deleteItem(post)
      .subscribe(
        null, 
        (error: Response) => {
          if(error.status === 404) {
            alert('404 ERRORS!');
          }
          this.posts.splice(index, 0, post);
          
        });
  }
}
