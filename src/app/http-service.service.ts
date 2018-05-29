import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

const baseUrl ='https://api.pokemontcg.io/v1/';
const cardUrl = 'cards/';
const series = 'base';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http: HttpClient) { }

  getPokemonCard(cardId: string) {
    return this.http.get(baseUrl + cardUrl + cardId);
  }

  searchPokemonCardByName(name: string) {
    let Params = new HttpParams();

    // Begin assigning parameters
    Params = Params.append('name',name);
    Params = Params.append('series', series);
    Params = Params.append('set', "base");
    //Params = Params.append('page', "1");
    //console.log("the page var: " + );
    var linky = this.http.get(baseUrl + cardUrl, {params: Params});
    return linky;
    //console.log("ApiLink: "+ baseUrl + cardUrl, {params: Params});
  }

  searchPokemonCardByType(type: string) {
    let Params = new HttpParams();

    // Begin assigning parameters
    Params = Params.append('types',type);
    Params = Params.append('series', series);
    Params = Params.append('set', "base");
    return this.http.get(baseUrl + cardUrl, {params: Params});
  }
}
