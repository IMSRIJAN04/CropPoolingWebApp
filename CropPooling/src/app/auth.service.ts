import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";
import { from as x } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AngularFireAuth, private router: Router) {}

    canActivate(): Observable<boolean> {
      return x(this.auth)
        .take(1)
        .map(state => !!state)
        .do(authenticated => {
      if 
        (!authenticated) this.router.navigate([ '/login' ]);
      })
    }
 
}