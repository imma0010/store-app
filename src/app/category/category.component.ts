import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:1337/categories').subscribe(
      category => {
        this.categories = category;
        console.log(this.categories);
      }
    );
  }

}
