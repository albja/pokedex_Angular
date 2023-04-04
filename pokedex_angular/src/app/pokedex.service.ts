import { Injectable } from '@angular/core';
import { Pokemon } from 'src/model/pokemon.model';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  constructor(public http: HttpClient) { }

  getArrayPokemon(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('./pokemon-mock.ts')
  }
}