import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-apidelete',
  templateUrl: './apidelete.component.html',
  styleUrls: ['./apidelete.component.scss']
})
export class APIdeleteComponent implements OnInit {
  result: any;
  private _search: number;
  cityId: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  searchByID(id: number) {
    this.http.get(`http://localhost:13387/api/city/${id}`)
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
    this.http.delete(`http://localhost:13387/api/city/${+this.cityId}`)
      .subscribe((data: any) => {
        console.log(data)
      }
      )
  }
}


