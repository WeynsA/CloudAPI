import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl ='https://api.pokemontcg.io/v1/';
const cardUrl = 'cards/';
const series = 'base';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getPokemonCard(cardId: string) {
    return this.http.get(baseUrl + cardUrl + cardId);
  }

  searchPokemonCardByName(name: string,page:number) : Observable<HttpResponse<any>> {
    let Params = new HttpParams();

    // Begin assigning parameters
    Params = Params.append('name', name);
    Params = Params.append('series', series);
    Params = Params.append('set', "base");
    Params = Params.append('page', page.toString());
    Params = Params.append('pageSize', '30')

    return this.http.get(baseUrl + cardUrl, {params: Params, observe :'response'});

  }

  searchPokemonCardByType(type: string, page:number) {
    let Params = new HttpParams();

    // Begin assigning parameters
    Params = Params.append('types',type);
    Params = Params.append('series', series);
    Params = Params.append('set', "base");
    Params = Params.append('page', page.toString());
    Params = Params.append('pageSize', '30')
    return this.http.get(baseUrl + cardUrl, {params: Params, observe : 'response'});
  }
}
