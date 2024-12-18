import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Produit } from 'app/models/Produit';
import { KitPack } from 'app/models/KitPack';

const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl = 'http://localhost:8082/api/produits';

  constructor(private http: HttpClient) { }

  // Get all products
  getAllProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseUrl);
  }
 // Fetch products by centre ID
 getProductsByCentreId(centreId: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/centre/${centreId}`);
}

// Fetch a product by ID
getProductById(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/${id}`);
}
private apiUrl = 'http://localhost:8082/api/produits'; 
// Upload product with image
uploadProductt(name: string, file: File, centreId: number): Observable<any> {
  const formData: FormData = new FormData();
  formData.append('name', name);
  formData.append('photo', file, file.name);
  formData.append('centreId', centreId.toString());

  return this.http.post(`${this.apiUrl}/upload`, formData);
}

  // Create a new product
  // createProduit(produit: Produit): Observable<Produit> {
  //   return this.http.post<Produit>(this.baseUrl, produit, headers);
  // }

  // Update an existing product
  updateProduit(id: number, produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${this.baseUrl}/${id}`, produit, headers);
  }

  // Delete a product
  deleteProduit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  // Get products by centre ID
  getProduitsByCentreId(centreId: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.baseUrl}/centre/${centreId}`);
  }
  createKitPack(kitPack: KitPack): Observable<KitPack> {
    return this.http.post<KitPack>(this.baseUrl, kitPack, headers);
}

  // Fetch product image
  getProductImage(filename: string): Observable<Blob> {
    return this.http.get(`${this.baseUrl}/images/${filename}`, {
      responseType: 'blob',
    });
  }

  createProduit(centreName: string, name: string, file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('centreName', centreName);
    formData.append('name', name);
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/affecter-produit-centre`, formData);
  }
}