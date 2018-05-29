import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(public httpService: HttpServiceService) { }

  ngOnInit() {
   /* this.httpService.getPokemonCard('ex14-28')
    .subscribe(
      (pokemonData) => {
        this.cardData.name = (pokemonData as any).card.name;
        this.cardData.imageUrl = (pokemonData as any).card.imageUrl
        console.log('this.cardData', this.cardData, pokemonData);
      }
    )*/
  }

  clickSearch() {
    this.httpService.searchPokemonCardByName(this.searchString)
    .subscribe(
      (searchData) => {
        console.log('searchData for ' + this.searchString, searchData);
       this.cardData = (searchData as any).cards || [];
      },
      (err) => console.warn(err)
    )
    
  }

  typeSearch () {
    this.httpService.searchPokemonCardByType(this.typeString)
    .subscribe(
      (searchData) => {
        console.log('searchData for ' + this.typeString, searchData);
       this.cardData = (searchData as any).cards || []; 
      },
      (err) => console.warn(err)
    )
  }

  prevPage(){
    if (this.page > 1)
      this.page--;
    console.log(this.page);
  }

  nextPage(){
    this.page++;
    console.log(this.page);
  }

  public login(): void {
    //this.auth0.authorize();
  }


}