import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apiget',
  templateUrl: './apiget.component.html',
  styleUrls: ['./apiget.component.scss']
})
export class ApigetComponent implements OnInit {
  result: any;
  private _search: string = ""  
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.searchName();
    }
  searchName() {
    this.http.get(`http://localhost:13387/api/city/`)
    .subscribe(
      (res: Response) => {
        this.result = res;
        console.log(this.result)
      }
    )
  }
  searchSpecificName(replaced: string) {
    this.http.get(`http://localhost:13387/api/city/n/${replaced}`)
    .subscribe(
      (res: Response) => {
        this.result = res;
        console.log(this.result)
      }
    )
  }
  get Search() {
    return this._search;
  }
  set Search(value: string) {
    this._search = value;
    if(this._search == "") {
      this.searchName();
    }
    var replaced = value.split(' ').join('%20');
    this.searchSpecificName(replaced);
  }

}
