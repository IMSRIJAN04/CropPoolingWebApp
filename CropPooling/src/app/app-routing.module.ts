import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { EmailVerificationComponent } from './login/email-verification/email-verification.component';
import { ForgotPassComponent } from './login/forgot-pass/forgot-pass.component';
import { UserprofileComponent } from './members/userprofile/userprofile.component';
import { FarmerComponent } from './farmer/farmer.component';
import { DriverComponent } from './driver/driver.component';
//importing authguard after creating it
import { AuthGuard } from './core/guard/auth.guard';




const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'emailVerification',component:EmailVerificationComponent},
  {path:'forgotPassword',component:ForgotPassComponent},
  {path:'signup',component:SignupComponent},
  {path:'farmer',component:FarmerComponent},
  {path:'driver',component:DriverComponent},
  {path:'members',component:MembersComponent,canActivate: [AuthGuard]},
  {path:'profile',component:UserprofileComponent},
  {path:'about',component:AboutComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
