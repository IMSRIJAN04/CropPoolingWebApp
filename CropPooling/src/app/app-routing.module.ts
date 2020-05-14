import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
//importing authguard after creating it
import { AuthGuard } from './core/guard/auth.guard';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'members',component:MembersComponent,canActivate: [AuthGuard]},
  {path:'about',component:AboutComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
