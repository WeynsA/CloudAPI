import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-apiput',
  templateUrl: './apiput.component.html',
  styleUrls: ['./apiput.component.scss']
})
export class APIputComponent implements OnInit {
  result: any;
  private _search: number; 
  private name: string = "";
  private residents: string = "";
  private area: string = "";
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  searchByID(id: number) {
    this.http.get(`http://localhost:103387/api/city/${id}`)
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
  get Search() {
    return this._search;
  }
  set Search(value: number) {
    this._search = value;
    if(this._search != null) {
      this.searchByID(value);
    }
  }
  wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }
  Put() {
    this.http.put(`http://localhost:103387/api/city`, {
      ID: this._search,
      Name: this.name,
      Residents: this.residents,
      Type: this.area
    })
    .subscribe((data:any) => {
      console.log(data)
    }
  )
  this.wait(1000);
  this.searchByID(this._search);
  }
}
