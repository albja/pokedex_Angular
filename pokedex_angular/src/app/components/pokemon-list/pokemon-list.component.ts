import { Component, Input } from '@angular/core';
import { Pokemon } from 'src/model/pokemon.model';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
@Input() pokemonData = Pokemon[];

export class PokemonListComponent {

}
