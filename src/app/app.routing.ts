import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { ValidationComponent } from './verification/validation.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './examples/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { CentreDetailsComponent } from './components/centre-details/centre-details.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProduitComponent } from './produit/produit.component';
import { GetcentreComponent } from './getcentre/getcentre.component';
import { LandingComponent } from './landing/landing.component';
import { ShowProductsComponent } from './show-products/show-products.component';
import { ShowKitPacksComponent } from './show-kitpacks/show-kitpacks.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: ComponentsComponent },
  { path: 'add-product', component: ProductFormComponent },
  { path: 'kitpacks', component: ShowKitPacksComponent },

  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: PasswordResetComponent },
  { path: 'user-profile', component: ProfileComponent },
  { path: 'centre-details/:id', component: CentreDetailsComponent },

  { path: 'landing', component: LandingComponent },
  { path: 'nucleoicons', component: NucleoiconsComponent },
  { path: 'verification', component: ValidationComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'produit', component: ProduitComponent },

  { path: 'detail/:id', component: ShowProductsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
