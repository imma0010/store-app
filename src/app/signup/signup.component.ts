import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm = this.fb.group({
    first_name: ['', Validators.required],
    middle_name: [''],
    last_name: ['', Validators.required],
    username: ['', Validators.required],
    address: ['', Validators.required],
    contact: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  password2: any;

  errors = [];

  passwordcomperr: boolean;

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.passwordcomperr = false;
  }

  onRegister() {
    if (this.userForm.value.password === this.password2) {
      console.log('User Form: ', this.userForm.value);
      this.http.post('http://localhost:1337/users', this.userForm.value)
        .subscribe(result => {
          console.log(result);
        });
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
