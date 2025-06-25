import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character, Rickandmorty } from '../models/response.interface';
import { Pokemons } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) { }

  public getResponse(): Observable<Rickandmorty> {
    return this.http.get<Rickandmorty>("https://rickandmortyapi.com/api/location");
  }

  public getPokemon(pokemon:string): Observable<Pokemons> {
    return this.http.get<Pokemons>("https://pokeapi.co/api/v2/pokemon/" + pokemon);
  }

  public getRaM(ramLink: string): Observable<Rickandmorty> {
    return this.http.get<Rickandmorty>(ramLink);
  }

  public getResident(ramLink: string): Observable<Character> {
    return this.http.get<Character>(ramLink);
  }



}
