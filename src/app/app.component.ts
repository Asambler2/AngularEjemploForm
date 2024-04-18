import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mdf';

  contactForm = new FormGroup({
    /*firstname: new FormControl({ value: 'Rahul', disabled: true }),*/
    firstname: new FormControl('', [Validators.required, Validators.minLength(10)]),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pincode: new FormControl(),
      country: new FormControl(),
    })
  })


  onSubmit() {
    console.log(this.contactForm.value);
  }
}


