import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgOtpInputModule } from 'ng-otp-input';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ValidationComponent } from './verification/validation.component';
import { SigninComponent } from './signin/signin.component';
import { AuthInterceptorService } from './Service/auth-interceptor.service';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { ProduitComponent } from './produit/produit.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { GetcentreComponent } from './getcentre/getcentre.component';
import { LandingComponent } from './landing/landing.component';
import { ShowKitPacksComponent } from './show-kitpacks/show-kitpacks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ValidationComponent,
    LandingComponent,ShowKitPacksComponent ,
    SigninComponent,ForgotPasswordComponent,PasswordResetComponent, ProduitComponent, ShowProductsComponent, GetcentreComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    NgbModule,
    NgOtpInputModule,
    AppRoutingModule,
    ComponentsModule,
    ExamplesModule,
  
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
