import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InputNameComponent } from './template/input-name/input-name.component';
import { InputEmailComponent } from './template/input-email/input-email.component';
import { InputTelComponent } from './template/input-tel/input-tel.component';
import { InputAddressComponent } from './template/input-address/input-address.component';


import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { InputPasswordComponent } from './template/input-password/input-password.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    InputNameComponent,
    InputEmailComponent,
    InputTelComponent,
    InputAddressComponent,
    LoginComponent,
    SignUpComponent,
    InputPasswordComponent,
    HomeComponent
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
