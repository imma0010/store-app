import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  vendors: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:1337/vendors').subscribe(
      vendor => {
        this.vendors = vendor;
      }
    );
  }

}
