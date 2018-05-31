import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-apiput2',
  templateUrl: './apiput2.component.html',
  styleUrls: ['./apiput2.component.scss']
})
export class Apiput2Component implements OnInit {
  result: any;
  private _search: number; 
  private name: string = "";
  private continent: string = "";
  private code: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  searchByID(id: number) {
    this.http.get(`http://localhost:13387/api/country/${id}`)
    .subscribe(
      (res: Response) => {
        this.result = res;
        console.log(this.result)
      }
    )
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
  get Search() {
    return this._search;
  }
  set Search(value: number) {
    this._search = value;
    if(this._search != null) {
      this.searchByID(value);
    }
  }

  Put() {
    this.http.put(`http://localhost:13387/api/country`, {
      ID: this._search,
      Name: this.name,
      Continent: this.continent,
      Code: this.code
    })
    .subscribe((data:any) => {
      console.log(data)
    })
  }
}
