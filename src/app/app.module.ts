import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfilePetComponent } from './components/profile-pet/profile-pet.component';
import { PetTableComponent } from './components/profile-pet/components/pet-table/pet-table.component';
import { LandingComponent } from './components/landing/landing.component';
import { PetLostComponent } from './components/pet-lost/pet-lost.component';

import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfilePetComponent,
    PetTableComponent,
    LandingComponent,
    PetLostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }