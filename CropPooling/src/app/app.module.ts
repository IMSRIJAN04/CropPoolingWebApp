import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import {AngularFireModule } from '@angular/fire';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './auth.service';

export const firebaseConfig = {
  apiKey: "AIzaSyCTmUh7vibosAOGKVKiqPYDYrepZqcIFWI",
  authDomain: "croppooling.firebaseapp.com",
  databaseURL: "https://croppooling.firebaseio.com",
  projectId: "croppooling",
  storageBucket: "croppooling.appspot.com",
  messagingSenderId: "1089438125123",
  appId: "1:1089438125123:web:18a67ab5468aa0fd2bd8f6",
  measurementId: "G-68CF3Z3CDZ"
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    AboutComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  schemas:[NO_ERRORS_SCHEMA],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
