import { Component, OnInit,NgZone } from '@angular/core';
import {AuthService} from 'src/app/core/services/auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }
  ngOnInit(): void {
  }

}
