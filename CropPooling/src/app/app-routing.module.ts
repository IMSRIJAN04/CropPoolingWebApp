import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import {from} from 'rxjs';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';
import { AuthGuard } from './core/auth.service';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'login',component:LoginComponent,canActivate:[AuthGuard]},
  {path:'signup',component:SignupComponent,canActivate:[AuthGuard]},
  {path:'login-email',component:EmailComponent,canActivate:[AuthGuard]},
  {path:'members',component:MembersComponent, resolve:{data: UserResolver}},
  {path:'about',component:AboutComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
