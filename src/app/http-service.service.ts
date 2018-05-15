import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

const baseUrl ='https://api.pokemontcg.io/v1/';
const cardUrl = 'cards/';
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
    return this.http.get(baseUrl + cardUrl, {params: Params});
  }
}
