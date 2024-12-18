import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/Service/auth.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  resetPasswordForm: FormGroup;
  token: string;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.resetPasswordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.token = params.get('token');
    });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password').value === form.get('confirmPassword').value
      ? null : { 'mismatch': true };
  }

  onSubmit() {
    
      this.authService.resetPassword(this.token, this.resetPasswordForm.value.password)
        .subscribe(
        response => {
            Swal.fire({
              icon: 'success',
              title: 'Password successfully reset',
              confirmButtonText: 'OK'
            }).then(() => {
              this.router.navigate(['/signin']);
            });
          },
          error => {
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: error.error.message,
              confirmButtonText: 'OK'
            });
          }
        );
    
  }
  /*signIn() {

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
    */
}
