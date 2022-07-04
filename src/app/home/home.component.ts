import { Component, OnInit } from '@angular/core';
import { AuthenticatorService } from '../authenticator.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: AuthenticatorService) {}

  ngOnInit(): void {}
  registrationForm = this.service.get_form();
}
