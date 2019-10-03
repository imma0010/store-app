import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    password: ['', Validators.required],
    password2: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onRegisterVendor() {
    console.log('Vendor Form', this.vendorForm);
  }

}
