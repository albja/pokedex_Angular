import { Component } from '@angular/core';
import { PokedexService } from 'src/app/pokedex.service';
import { Pokemon } from 'src/model/pokemon.model';
@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent {
  pokemon: Pokemon[];
  PokedexService: any;


  constructor(public pokedexService: PokedexService) {

    this.pokemon = this.PokedexService.getArrayPokemon()
  }

}