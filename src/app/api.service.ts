import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) { }
  getPokemonDetail(id){
     return this.http.get(id);
  }
  getPokemons(off){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/?offset=${off}&limit=20`);
  }
}
