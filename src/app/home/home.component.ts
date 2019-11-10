import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RoleService } from '../role.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  header: any;
  userView: boolean;
  vendorView: boolean;
  username: any;
  name: any;
  role: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private r: RoleService) {
    route.params.subscribe(val => {
      this.userView = true;
      this.vendorView = false;
      this.username = '';
      this.name = '';
      console.log('Token', localStorage.getItem('token'));
      if(localStorage.getItem('token') === null) {
        this.userView = false;
        this.vendorView = false;
      } else {
        this.http.get('http://localhost:1337/info', {
          headers : {'Authorization': localStorage.getItem('token')}
        }).subscribe(
          data => {
            this.role = data['role'];
            this.r.setRole(data['role']);
            this.r.setId(data['data']['id']);
            console.log('User Info: ', data);
            if(data['role'] === 'vendor') {
              this.vendorView = true;
              this.userView = false;
              this.name = data['data']['name'];
            } else if(data['role'] === 'user'){
              this.userView = true;
              this.username = data['data']['username'];
            }
          }, err => {
            console.log(err);
          }
        )
      }
    });
  }

  ngOnInit() { }

  logOut() {
    localStorage.removeItem('token');
    window.location.href = 'http://localhost:4200/';
  }

}
