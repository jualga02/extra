import { Component } from '@angular/core';
import { PokemonComponent } from '../../components/pokemon/pokemon.component';
import { PhotoComponent } from '../../components/photo/photo.component';
import { DataService } from '../../services/data.service';
import { Pokemons } from '../../models/response.interface';


@Component({
  selector: 'app-ejercicio2',
  imports: [PokemonComponent, PhotoComponent],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  public constructor(public service: DataService){
    this.sprite1 = '';
    this.sprite2 = '';
    this.sprite3 = '';
    this.sprite4 = '';
    this.sprite = '';
  }

  public sprite1:string;
  public sprite2:string;
  public sprite3:string;
  public sprite4:string;
  public sprite:string;
  public pokemons:Pokemons[] = [] as Pokemons[];

  
    public getResponse(): void {

      this.service.getPokemon('Charmander').subscribe((response) => {
          this.sprite1 = response.sprites.back_default;
          this.sprite2 = response.sprites.back_shiny;
          this.sprite3 = response.sprites.front_default;
          this.sprite4 = response.sprites.front_shiny;
          this.pokemons.push(response);
          //console.log(this.pokemons[0].sprites.back_default);
      });

      this.service.getPokemon('Pikachu').subscribe((response) => {
          this.pokemons.push(response);
          //console.log(this.pokemons[1]);
      });

      this.service.getPokemon('Bulbasaur').subscribe((response) => {
          this.pokemons.push(response);
          //console.log(this.pokemons[2]);
      }); 
      
    }

  
  

    public ngOnInit(): void {
      this.getResponse();
      //this.sprite = this.pokemons[0].sprites.back_default;

    }
}
