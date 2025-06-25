import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { NgClass } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Rickandmorty, Result, Character } from '../../models/response.interface';

@Component({
  selector: 'app-modal',
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  public constructor(public service: DataService){
    //this.imagen = this.characters[this.charCursor].image;
    //this.nombre = this.characters[this.charCursor].name;
  };

  @Input() modalActive:boolean = false;
  @Input() characters:Character[] = [];
  @Output() modalActiveOff = new EventEmitter<boolean>();
  public charCursor:number = 0;
  public imagen:string = '';
  public nombre:string = '';

  public onClickModalOff(): void {
    this.modalActive = false;
    this.modalActiveOff.emit(true);
  }

  
  public onClickPrevPage(): void {
    if(this.charCursor==0){
      this.charCursor = this.characters.length-1;
    }else{
      this.charCursor--;
    }
    this.imagen = this.characters[this.charCursor].image;
    this.nombre = this.characters[this.charCursor].name;
  }

  public onClickNextPage(): void {
    if(this.charCursor == this.characters.length-1){
      this.charCursor = 0;
    }else{
      this.charCursor++;
    }
    this.imagen = this.characters[this.charCursor].image;
    this.nombre = this.characters[this.charCursor].name;
  }
  
 /* public ngAfterContentInit():void {
    //console.log(this.characters[0]);
    this.nombre = this.characters[this.charCursor].name;
    this.imagen = this.characters[this.charCursor].image;
    
  }*/

  public ngOnInit():void {
    //console.log(this.characters[0]);
    this.nombre = this.characters[this.charCursor].name;
    this.imagen = this.characters[this.charCursor].image;
    
  }
  

}
