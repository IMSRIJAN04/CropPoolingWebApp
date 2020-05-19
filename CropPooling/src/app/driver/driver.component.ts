import { Component, OnInit,NgZone} from '@angular/core';
import {AuthService } from 'src/app/core/services/auth.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone
  ) { }

  ngOnInit(): void {
  }

}
