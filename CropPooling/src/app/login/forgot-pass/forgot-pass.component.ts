import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.scss']
})
export class ForgotPassComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

}
