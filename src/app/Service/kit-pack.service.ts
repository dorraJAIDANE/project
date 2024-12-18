import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { KitPack } from 'app/models/KitPack';

const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class KitPackService {

  private baseUrl = 'http://localhost:8082/api/kitpacks';

  constructor(private http: HttpClient) { }

  // Get all kit packs
  getAllKitPacks(): Observable<KitPack[]> {
    return this.http.get<KitPack[]>(`${this.baseUrl}`);
  }

  // Get kit pack by ID
  getKitPackById(id: number): Observable<KitPack> {
    return this.http.get<KitPack>(`${this.baseUrl}/${id}`);
  }

  // Create a new kit pack
  createKitPack(centreId: number, kitPackDto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create/${centreId}`, kitPackDto, headers).pipe(
      catchError(this.handleError<any>('createKitPack'))
    );
  }

  // Update an existing kit pack
  updateKitPack(id: number, kitPack: KitPack): Observable<KitPack> {
    return this.http.put<KitPack>(`${this.baseUrl}/${id}`, kitPack, headers).pipe(
      catchError(this.handleError<any>('updateKitPack'))
    );
  }

  // Delete a kit pack
  deleteKitPack(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError<any>('deleteKitPack'))
    );
  }

  // Error handling function
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result
      return throwError(() => new Error(`${operation} failed: ${error.message}`));
    };
  }
}
