import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: ['.searchButton {margin-right: 5px;}']
})
export class SearchComponent implements OnInit {
  public cardData: any = [];
  public searchString: string;
  public typeString: string;
  private page: number = 1;
  private total: number = 0;
  private pageSize:number = 30;
  constructor(
    public httpService: HttpServiceService,
    public auth: AuthService
  ) { }

  ngOnInit() {}

  clickSearch() {
    this.httpService.searchPokemonCardByName(this.searchString, this.page)
    .subscribe(
      (searchData) => {
        console.log('searchData for ' + this.searchString, searchData);
       this.cardData = (searchData.body as any).cards || [];
       let headers = searchData.headers;
       this.total =parseInt( headers.get('Total-Count'))
      },
      (err) => console.warn(err)
    )
    
  }

  typeSearch () {
    this.httpService.searchPokemonCardByType(this.typeString, this.page)     //Query moet worden meegegeven en paginanr.
    .subscribe(
      (searchData) => {
        console.log('searchData for ' + this.typeString, searchData);
       this.cardData = (searchData.body as any).cards || [];                       //callback data in array
       let headers = searchData.headers;                                      //Pagnation, headers lezen
       this.total =parseInt( headers.get('Total-Count'))                      //Pagnation, total item count voor 
      },                                                                      //Correct display van aantal pagina's
      (err) => console.warn(err)
    )
  }

  public login(): void {
    //this.auth0.authorize();
  }

  public pageChange($page){
   this.page = $page;
   this.clickSearch();
  }

}