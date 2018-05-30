import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-apipost',
  templateUrl: './apipost.component.html',
  styleUrls: ['./apipost.component.scss']
})
export class APIpostComponent implements OnInit {
  private name: string = "";
  private residents: string = "";
  private area: string = "";
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  get Name() {
    return this.name;
  }
  set Name(value: string) {
    this.name = value;
    var replaced = value.split(' ').join('%20');
  }
  get Residents() {
    return this.residents;
  }
  set Residents(value: string) {
    this.residents = value;
  }
  get Area() {
    return this.area;
  }
  set Area(value: string) {
    this.area = value;
  }
  Post() {
    this.http.post(`http://localhost:13387/api/city`, {
      Name: this.name,
      Residents: this.residents,
      Type: this.area
    })
      .subscribe((data: any) => {
        console.log(data)
      }
      )
  }

}
