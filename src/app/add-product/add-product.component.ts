import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RoleService } from '../role.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  categories: any;
  filesToUpload: Array<File> = [];

  productForm = this.fb.group({
    name: ['', Validators.required],
    price: ['', Validators.required],
    description: ['', Validators.required],
    rating: 0,
    category_id: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private role: RoleService, private route: Router) { }

  ngOnInit() {
    console.log(this.role.getRole());
    if(this.role.getRole() !== 'vendor') {
      this.route.navigate(['error']);
    } else {
      this.http.get('http://localhost:1337/categories', {
        headers : {'Authorization': localStorage.getItem('token')}
      }).subscribe(categories => {
        this.categories = categories;
        console.log(this.categories);
      });
    }
  }

  onUploadProduct() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    console.log(files);
    formData.append('name', this.productForm.value.name);
    formData.append('price', this.productForm.value.price);
    formData.append('description', this.productForm.value.description);
    formData.append('category_id', this.productForm.value.category_id);
    formData.append('rating', 0);

    for(let i = 0; i < files.length; i++) {
      formData.append("image", files[i], files[i]['name']);
    }
    this.http.post('http://localhost:1337/products', formData, {
      headers : {'Authorization': localStorage.getItem('token')}})
      .subscribe(result => {
        console.log(result);
        Swal.fire(
          'Product Added',
          result['message'],
          'success'
        )
      });
  }

  fileChangedEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
