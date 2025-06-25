import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { Character } from '../../models/response.interface';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-card',
  imports: [ModalComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  public constructor(public service: DataService){};

  @Input() name:string = '';
  @Input() dimension:string = '';
  @Input() residents:string[] = [];
  @Output() modal = new EventEmitter<string>();
  public nombre: string = '';
  public imagen: string = '';
  public characters:Character[] = [];

  public modalActive:boolean= false;


  public onClickModal(): void {
    this.modalActive = true;
    this.modal.emit('none');

    //console.log(this.residents);
  }

  public onClickModalOff(modalOff:boolean){
    this.modalActive= false;
    this.modal.emit('inline');
  }

  public ngOnInit(): void {
    this.residents.forEach(element => {
      this.service.getResident(element).subscribe((response) => {
        this.characters.push(response);
      });
    });
    //console.log(this.characters);
  }
}
