import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DataTablesModule } from 'angular-datatables';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    ProfileComponent,
    AboutusComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    FormsModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [
    AuthenticationService, 
    AuthGuardService,DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
