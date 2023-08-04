import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-Code-Quality-Reference-Project';
  username!: string;
  password!: string;

  onSubmit(form: NgForm) {
    // if (form.valid) {
    // }
    console.log('Form Submitted!');
  }
}
