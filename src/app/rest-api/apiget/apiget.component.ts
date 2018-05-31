import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-apiget',
  templateUrl: './apiget.component.html',
  styleUrls: ['./apiget.component.scss']
})
export class ApigetComponent implements OnInit {

  result: any;
  private _search: string = "";
  private sortDir: string = "asc"
  private sortVar: string = "area";
  private page: number = 0;
  private total: number = 0;
  private pageSize: number = 5;

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.searchName();
  }
  public searchName() {
    this.http.get(`http://localhost:13387/api/city?page=` + this.page + "&length=" + this.pageSize + "&sort=" + this.sortVar + "&dir=" + this.sortDir )
      .subscribe(
        (res: Response) => {
          this.result = res;
          console.log(this.result)
        }
      )
  }

  public searchSpecificName(replaced: string) {
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
    if (this._search == "") {
      this.searchName();
    }
    var replaced = value.split(' ').join('%20');
    this.searchSpecificName(replaced);
  }

  public prevPage() {
    if (this.page > 0)
      this.page--;
    this.searchName();
    console.log(this.page)
  }

  public nextPage() {
    this.page++;
    this.searchName();
    console.log(this.page)
  }

  public twoResultsPerPage() {
    this.pageSize = 2;
    this.searchName();
  }

  public fiveResultsPerPage() {
    this.pageSize = 5;
    this.page = 0;
    this.searchName();
  }

  public moreResultsPerPage() {
    this.pageSize = 25;
    this.page = 0;
    this.searchName();
  }

  public sortDirAcc() {
    this.sortVar = "area";
    if (this.sortDir == "asc")
      this.sortDir = "dsc"
    else
      this.sortDir = "asc";
    this.searchName();
  }

  public sortFieldId() {
    this.sortVar = "id"
    if (this.sortDir == "asc")
      this.sortDir = "dsc"
    else
      this.sortDir = "asc";
    this.searchName();
    console.log(this.sortVar)
    console.log(this.sortDir)
  }
}