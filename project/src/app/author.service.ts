import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }
  
  getAuthor() {
    return ['준우', '가온', '여울'];
  }
}
