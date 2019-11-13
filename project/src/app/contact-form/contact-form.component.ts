import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    { id: 1, name: 'Email' },
    { id: 2, name: 'Mobile' },
    { id: 3, name: 'Address' },
  ];

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(x);
  }

  onSubmit(f) {
    console.log(f.valid)
  }
}
