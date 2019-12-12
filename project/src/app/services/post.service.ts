import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppError } from '../app-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 

  }

  getItems() {
    return this.http.get(this.url);
  }

  postItem(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  putItem(post) {
    return this.http.patch(`${this.url}/${post.id}`, {
      response: 'YES PATCH IS SUCCEDED!'
    });
  }

  deleteItem(post) {
    return this.http.delete(`${this.url}123/${post.id}`).pipe(catchError((er: Response) => {
      return Observable.throw(new AppError(er));
    }))
  }
}
