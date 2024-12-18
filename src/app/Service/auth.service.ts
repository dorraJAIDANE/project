import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../models/User';
import { signIn } from '../models/signIn';
import { JwtResponse } from '../models/JwtResponse';
import { TokenDto } from 'app/models/TokenDto';
const headers = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:8082/api/auth';
  private api='http://localhost:8082/google'



  constructor(private http: HttpClient) { }
  signIn(credentials: signIn): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.baseUrl}/signIn`, credentials).pipe(
      map(response => {
        console.log('API Response:', response);  // Debug: afficher la réponse de l'API
        // Vérifiez que la réponse contient bien les tokens
        if (response.token && response.refreshToken) {
          // Store the access and refresh tokens in localStorage
          localStorage.setItem('accessToken', response.token);
          localStorage.setItem('refreshToken', response.refreshToken);
          console.log('Tokens stored in localStorage');
        } else {
          console.error('Token or refreshToken not found in response');
        }
        return response;
      })
    );
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  signOut(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  oauthURL = 'http://localhost:8082/oauth2/';
    googleurl='http://localhost:8082/google';


    public google(tokenDto: TokenDto): Observable<TokenDto> {
        return this.http.post<TokenDto>(this.googleurl , tokenDto, headers);
    }
    
    handleOAuth2SuccessRedirect() {
        this.http.get<any>(this.oauthURL + 'success').pipe(
            catchError(error => throwError(error))
        ).subscribe(response => {
            window.location.href = response.redirectUrl;
        });
    }

    handleOAuth2FailureRedirect() {
        this.http.get<any>(this.oauthURL + 'failure').pipe(
            catchError(error => throwError(error))
        ).subscribe(response => {
            window.location.href = response.redirectUrl;
        });
    }
    signup(user: any, roleName: string): Observable<any> {
      return this.http.post(`http://localhost:8082/api/auth/signup/employee/${roleName}`, user);
    }
  
    getRoles(): Observable<any> {
      return this.http.get('http://localhost:8082/api/role/getAllRoles');  // Update the URL if different
    }
   
  
  
    forgotPassword(email: string): Observable<any> {
      const params = new HttpParams().set('email', email);
      return this.http.post(`${this.baseUrl}/forgot-password`, {}, { params });
    }
  
    resetPassword(token: string, password: string): Observable<any> {
      const params = new HttpParams()
        .set('token', token)
        .set('password', password);
      return this.http.post(`${this.baseUrl}/reset-password`, {}, { params });
    }
    /*resetPassword(token: string, newPassword: string): Observable<any> {
      return this.http.post(`${this.baseUrl}/reset-password`, { token, newPassword });
    }*/
}

