import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { DataService } from './data.service';
import { AuthService } from './auth.service';

import { ProductentryComponent } from './productentry/productentry.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    ContactComponent,
    ProductentryComponent,
    ProductupdateComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
    {path: ' ' , component:  AppComponent},
    {path: 'products' , component:  ProductsComponent},
    {path: 'contacts' , component:  ContactComponent},
    {path: 'proentry' , component:  ProductentryComponent},
    {path: 'update/:id' , component:  ProductupdateComponent},
    {path: 'login' , component:  LoginComponent},
    {path: 'signup' , component:  SignupComponent}
   ]),
  ],
  providers: [DataService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
