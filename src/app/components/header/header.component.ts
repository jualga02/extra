import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public ejercicio1:string = 'Ejercicio 1';
  public ejercicio2:string = 'Ejercicio 2';
  public bColor:string = "red";

  public onMouseOver1():void {
    this.ejercicio1 = 'Rick & Morty';
    this.bColor = "maroon";

  }

  public onMouseLeave1(): void {
    this.ejercicio1 = 'Ejercicio 1';
    this.bColor = 'red';
  }

  public onMouseOver2():void {
    this.ejercicio2 = 'Pokémon';
    this.bColor = 'Maroon';

  }

  public onMouseLeave2(): void {
    this.ejercicio2 = 'Ejercicio 2';
    this.bColor = 'red';
  }
}
