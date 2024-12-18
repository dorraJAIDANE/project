import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { signIn } from 'app/models/signIn';
import { AuthService } from 'app/Service/auth.service';
import Swal from 'sweetalert2';
import { TokenDto } from 'app/models/TokenDto';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  test: Date = new Date();
  focus: boolean;
  focus1: boolean;
  signInData: signIn = { email: '', password: '' };
  tokenDto: TokenDto = { value: '' }; 
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  signIn() {

      this.authService.signIn(this.signInData).subscribe(
        response => {
          console.log('User signed in successfully', response);
          Swal.fire({
            icon: 'success',
            title: 'Connexion réussie!',
            text: 'Vous êtes maintenant connecté.',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigate(['/landing']);
        },
        error => {
          console.error('Sign in failed', error);
          Swal.fire({
            icon: 'error',
            title: 'Erreur de connexion',
            text: 'Email ou mot de passe incorrect.',
          });
        }
      );
    } 
    

    
  }







  

