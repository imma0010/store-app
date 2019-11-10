import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  result = '';

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private route: Router) { }

  ngOnInit() {
  }

  login() {
    console.log(this.loginForm.value);
    this.http.post('http://localhost:1337/login', this.loginForm.value).subscribe(
      data => {
        this.result = JSON.stringify(data);
        console.log('Sucessfully Logged In');
        console.log(data);
        if(data['token'] === undefined) {
          console.log('Cannot Log In');
        } else {
          localStorage.setItem('token', 'Bearer ' + data['token']);
          window.location.href = 'http://localhost:4200';
        }
      }, err => {
        this.result = err;
        console.log('Couldn\'nt Login' + err);
      }
    )
  }
}
