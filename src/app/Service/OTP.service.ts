import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OTP } from 'app/models/OTP';
import { environment } from 'environments/environment';


@Injectable({ providedIn: 'root' })
export class OTPSERVICE {
    apiUrl: 'http://localhost:8082'
    constructor(
        private router: Router,
        private http: HttpClient
    ) {}
    
    generateOTP(): Observable<OTP> {
        return this.http.post<OTP>(`http://localhost:8082/OTP/GenerateOTp`, {});
    }
    verifyOTP(identification: string): Observable<boolean> {
        return this.http.post<boolean>(`http://localhost:8082/OTP/VerifOTP/${identification}`, {})
        
    }
    getOTPbyId(){}
    resendOTP(email: string): Observable<OTP> {
        return this.http.post<OTP>(`http://localhost:8082/OTP/ResendOTP/${email}`, null);
    }
    userstatus(email:string, result:boolean): Observable<void>{
        return this.http.post<void>(`http://localhost:8082/OTP/userstatus/${email}/${result}`, null);
    }
}

