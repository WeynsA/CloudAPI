import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cardData: any = [];
  public searchString: string;
  public typeString: string;
  constructor(
    public httpService: HttpService,
    public auth: AuthService) { }

  ngOnInit() {
  }
}
