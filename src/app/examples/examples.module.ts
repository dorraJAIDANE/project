import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AppRoutingModule } from 'app/app.routing';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    AppRoutingModule,
    BrowserModule,
  
    // ComponentsModule, // Only import if it's needed here
  ],
  declarations: [
  
    SignupComponent,
    ProfileComponent
  ]
})
export class ExamplesModule { }
