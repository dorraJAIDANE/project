import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/Service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      console.log('Form is valid. Submitting...');
      this.authService.forgotPassword(this.forgotPasswordForm.value.email)
        .subscribe(
          response => {
            console.log('Password reset link sent to your email.', response);
            Swal.fire({
              icon: 'success',
              title: 'Password reset link sent to your email.',
              text: 'Please check your email to reset your password.',
              confirmButtonText: 'OK'
            });
          },
          error => {
            console.error('Error in sending password reset link:', error);
            Swal.fire({
              icon: 'error',
              title: 'Failed',
              text: 'Failed to send password reset link, please try again.',
              confirmButtonText: 'OK'
            });
          }
        );
    } else {
      console.log('Form is invalid.');
    }
  }
  
}
