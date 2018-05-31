import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-rest-api2',
  templateUrl: './rest-api2.component.html',
  styleUrls: ['./rest-api2.component.scss']
})
export class RestApi2Component implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
