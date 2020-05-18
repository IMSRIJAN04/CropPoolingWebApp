import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
 

//components
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { ForgotPassComponent } from './login/forgot-pass/forgot-pass.component';
import { EmailVerificationComponent } from './login/email-verification/email-verification.component';
import { DriverComponent } from './driver/driver.component';
import { FarmerComponent } from './farmer/farmer.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// above are basic and necessary imports
import { environment } from '../environments/environment';
import { ReactiveFormsModule } from '@angular/forms';

//now we will import firebase modules
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage'
//the above are the firebase modules and angular/fire is the core package that provides firebase services



import { AuthService } from './core/services/auth.service';
import { UserprofileComponent } from './members/userprofile/userprofile.component';
import { AddTruckComponent } from './driver/truck/add-truck/add-truck.component';
import { EditTruckComponent } from './driver/truck/edit-truck/edit-truck.component';
import { TruckListComponent } from './driver/truck/truck-list/truck-list.component';




@NgModule({

  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    AboutComponent,
    SignupComponent,
    MembersComponent,
    ForgotPassComponent,
    EmailVerificationComponent,
    DriverComponent,
    FarmerComponent,
    UserprofileComponent,
    AddTruckComponent,
    EditTruckComponent,
    TruckListComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],

  schemas:[NO_ERRORS_SCHEMA],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
