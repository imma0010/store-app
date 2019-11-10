import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;

  constructor(private http: HttpClient, private role: RoleService) { }

  ngOnInit() {
    this.http.get('http://localhost:1337/products').subscribe(
      data => {
        this.products = data;
        console.log(data);
      }, err => {
        console.log(err);
      }
    );
  }
  productdetail(){
    window.location.href = 'http://localhost:4200/';
  }

  payment(i) {
    if(this.role.getRole() === 'user') {
      
    console.log('Id: ' + i);
    var tAmt = this.products[i].price;
    var amt = this.products[i].price;
    var txAmt = 0;
    var psc = 0;
    var pdc = 0;
    console.log('Total Amount', tAmt);
    var paymentpath="https://uat.esewa.com.np/epay/main";
var params= {
    amt: amt,
    psc: psc,
    pdc: pdc,
    txAmt: txAmt,
    tAmt: tAmt,
    pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
    scd: "epay_payment",
    su: "http://merchant.com.np/page/esewa_payment_success",
    fu: "http://merchant.com.np/page/esewa_payment_failed"
}
Swal.fire('Are You Sure').then(
  sure => {
    if(sure) {
      
    this.post(paymentpath, params);
    }
  }
);
    } else {
      Swal.fire('Only Users can Buy Products');
    }
  }

  

 post(payment, params) {
  var form = document.createElement("form");
  form.setAttribute("method", "POST");
  form.setAttribute("action", payment);

  for(var key in params) {
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", params[key]);
      form.appendChild(hiddenField);
  }

  document.body.appendChild(form);
  form.submit();
}

}
