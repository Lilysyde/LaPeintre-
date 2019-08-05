import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RealisationComponent } from './realisation/realisation.component';
import { TemoignageComponent } from './temoignage/temoignage.component';
import { ContactComponent } from './contact/contact.component';
import { PrestationComponent } from './prestation/prestation.component';
import { QuisuisjeComponent } from './quisuisje/quisuisje.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { InterfaceAdminComponent } from './interface-admin/interface-admin.component';
import { HttpClientModule } from '@angular/common/http';


var config = {
  apiKey: "AIzaSyCnZV8z8Os7Mm4kzxZJXjPssRzhtzcsBu0",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "la-peintre",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    QuisuisjeComponent,
    RealisationComponent,
    TemoignageComponent,
    ContactComponent,
    PrestationComponent,
    AdminComponent,
    LoginComponent,
    InterfaceAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
