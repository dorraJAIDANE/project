/*// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8082/api/auth';  // Update the base URL if different

  constructor(private http: HttpClient) { }

  signup(user: any, roleName: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup/employee/${roleName}`, user);
  }

  getRoles(): Observable<any> {
    return this.http.get('http://localhost:8082/api/role/getAllRoles');  // Update the URL if different
  }
 



       // Méthode pour envoyer une demande de réinitialisation de mot de passe
       forgotPassword(email: string): Observable<any> {
        return this.http.post(`${this.baseUrl}/forgot-password`, { email });
      }
}
*/