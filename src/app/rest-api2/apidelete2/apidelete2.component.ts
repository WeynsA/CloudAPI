import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apidelete2',
  templateUrl: './apidelete2.component.html',
  styleUrls: ['./apidelete2.component.scss']
})
export class Apidelete2Component implements OnInit {
  result: any;
  private _search: number;
  countryId: string;
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
  get Search() {
    return this._search;
  }
  set Search(value: number) {
    this._search = value;
    if (this._search != null) {
      this.searchByID(value);
    }
  }
  Delete() {
    this.http.delete(`http://localhost:13387/api/country/${+this.countryId}`)
      .subscribe((data: any) => {
        console.log(data)
      }
      )
  }
}


