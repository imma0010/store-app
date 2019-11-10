import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vendorsignup',
  templateUrl: './vendorsignup.component.html',
  styleUrls: ['./vendorsignup.component.css']
})
export class VendorsignupComponent implements OnInit {

  vendorForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    contact: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  result: any;

  password2 = "";

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
  }

  onRegisterVendor() {
    if(this.vendorForm.value.password === this.password2) {
      console.log('Vendor Form', this.vendorForm);
      this.http.post('http://localhost:1337/vendors', this.vendorForm.value)
        .subscribe(result => {
          this.result = result;
          console.log(result);
        });
    } else {
      console.log('Password does not match');
    }
  }

}
