import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';


//ng bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//ng bootstrap

//data table
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
//data table

//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
//firebase


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DataService } from './data.service';

import { AuthService } from './auth.service';

import { AuthguardService} from './authguard.service';

import { ProductentryComponent } from './productentry/productentry.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ManageproductComponent } from './manageproduct/manageproduct.component';
import { DatatblComponent } from './datatbl/datatbl.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProductsComponent,
    ContactComponent,
    ProductentryComponent,
    ProductupdateComponent,
    LoginComponent,
    SignupComponent,
    ManageproductComponent,
    DatatblComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    NgxDatatableModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
    {path: ' ' , component:  AppComponent},
    {path: 'products' , component:  ProductsComponent},
    {path: 'contacts' , component:  ContactComponent},
    {path: 'proentry' , component:  ProductentryComponent, canActivate:[AuthguardService]},
    {path: 'update/:id' , component:  ProductupdateComponent},
    {path: 'login' , component:  LoginComponent},
    {path: 'signup' , component:  SignupComponent},
    {path: 'manage' , component:  ManageproductComponent},
    {path: 'data' , component:  DatatblComponent}
   ]),
  ],
  providers: [DataService,AuthService, AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
