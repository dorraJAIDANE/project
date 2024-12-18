import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/Service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  roles: any[];
  focus: boolean = false;
  focus1: boolean = false;
  focus2: boolean = false;
  focus3: boolean = false;

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8), 
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])/) 
      ]],
      role: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.authService.getRoles().subscribe(data => {
      this.roles = data;
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      const user = {
        name: this.signupForm.value.name,
        username: this.signupForm.value.username,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password
      };
      const role = this.signupForm.value.role;
      this.authService.signup(user, role).subscribe(response => {
        localStorage.setItem('email', user.email);
        console.log('Signup successful', response);
        Swal.fire({
          icon: 'success',
          title: 'Signup Successful',
          text: 'You have successfully signed up!',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(['/signin']);  // Redirect to home page
        });
      }, error => {
        console.error('Signup failed', error);
        Swal.fire({
          icon: 'error',
          title: 'Signup Failed',
          text: 'Signup failed, please try again.',
          confirmButtonText: 'OK'
        });
      });
    }
  }
}
