import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-apipost2',
  templateUrl: './apipost2.component.html',
  styleUrls: ['./apipost2.component.scss']
})
export class Apipost2Component implements OnInit {
  private name: string = "";
  private continent: string = "";
  private code: string = "";
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
  get Continent() {
    return this.continent;
  }
  set Continent(value: string) {
    this.continent = value;
  }
  get Code() {
    return this.code;
  }
  set Code(value: string) {
    this.code = value;
  }
  Post() {
    this.http.post(`http://localhost:13387/api/country`, {
      Name: this.name,
      Continent: this.continent,
      Type: this.code
    })
      .subscribe((data: any) => {
        console.log(data)
      }
      )
  }

}
