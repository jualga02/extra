import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Pokemons } from '../../models/response.interface';

@Component({
  selector: 'app-pokemon',
  imports: [],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  public constructor(){
  }
  @Input() pokemon: Pokemons = {} as Pokemons;
  public pName:string ="";
  public url:string= '';

  public ngOnInit(): void {
    //console.log(this.pokemon)
    this.pName = this.pokemon.name;
    this.url = this.pokemon.sprites.back_default;
  }
}
