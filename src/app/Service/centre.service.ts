import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Centre } from 'app/models/Centre';
import { Produit } from 'app/models/Produit';

const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  private baseUrl = 'http://localhost:8082/api/centres';

  constructor(private http: HttpClient) { }

  // Get all centers
  getAllCentres(): Observable<Centre[]> {
    return this.http.get<Centre[]>(this.baseUrl);
  }

  // Get center by ID
  getCentreById(id: number): Observable<Centre> {
    return this.http.get<Centre>(`${this.baseUrl}/${id}`);
  }

  // Create a new center
  createCentre(centre: Centre): Observable<Centre> {
    return this.http.post<Centre>(this.baseUrl, centre, headers);
  }

  // Update an existing center
  updateCentre(id: number, centre: Centre): Observable<Centre> {
    return this.http.put<Centre>(`${this.baseUrl}/${id}`, centre, headers);
  }

  // Delete a center
  deleteCentre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }







  getProductsByCentre(id: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${this.baseUrl}/${id}/products`);
}













}
