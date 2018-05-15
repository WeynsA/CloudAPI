import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public cardData: any = [];
  public searchString: string;
  public typeString: string;
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

}
