import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Produit } from 'app/models/Produit';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Produit = new Produit();
  selectedFile: File | null = null;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0] || null;
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    if (this.selectedFile) {
      formData.append('photo', this.selectedFile, this.selectedFile.name);
    }

    this.http.post('http://localhost:8082/api/produits/upload', formData, { observe: 'response' }).subscribe(
      response => {
        console.log('Product added successfully', response);
        this.router.navigate(['/home']);
      },
      (error: HttpErrorResponse) => {
        console.error('Error adding product', error);
        alert(`Error: ${error.statusText}`);
      }
    );
  }
}
