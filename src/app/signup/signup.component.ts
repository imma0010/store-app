import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
    userName: ['', Validators.required],
    address: ['', Validators.required],
    contact: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    password2: ['', Validators.required]
  });

  errors = [];

  passwordcomperr: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.passwordcomperr = false;
  }

  onRegister() {
    if (this.userForm.value.password === this.userForm.value.password2) {
      console.log('User Form: ', this.userForm.value);
    } else {
      this.errors.push('Password does not match');
      console.log('Password does not match');
    }
  }

  comparePassword(value) {
    console.log(value);
    if (this.userForm.value.password === value) {
      console.log('No Error');
      this.passwordcomperr = false;
    } else {
      console.log('Error');
      this.passwordcomperr = true;
    }
  }

}
