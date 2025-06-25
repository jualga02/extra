import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { DataService } from '../../services/data.service';
import { Rickandmorty, Result } from '../../models/response.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-ejercicio1',
  imports: [CardComponent, NgStyle],
  templateUrl: './ejercicio1.component.html',
  styleUrl: './ejercicio1.component.css'
})
export class Ejercicio1Component {
  public constructor(public service: DataService){};

  public residents:string[] = [];
  public locArray:Result[] = [];
  public responseObject: Rickandmorty = {} as Rickandmorty;
  public name:string = '';
  public dimension:string = '';
  public viewButtonAnt: string = 'none';
  public viewButtonNext: string = 'inline';
  //public modal:string = 'inline';

  public getResponse(): void {
    this.service.getResponse().subscribe((response) => {
        this.locArray = response.results;
        this.responseObject = response;
    });
  }

  public ngOnInit(): void {
    this.getResponse();
  }

  public onClickPrevPage(): void {
    this.service.getRaM(this.responseObject.info.prev).subscribe((response) => {
        this.locArray = response.results;
        this.responseObject = response;
        if(this.responseObject.info.prev==null){
          this.viewButtonAnt = 'none';
        }else {
          this.viewButtonAnt = 'inline'
        }

        if(this.responseObject.info.next==null){
          this.viewButtonNext = 'none';
        }else {
          this.viewButtonNext = 'inline'
        }
    });
  }

  public onClickNextPage(): void {
    this.service.getRaM(this.responseObject.info.next).subscribe((response) => {
        this.locArray = response.results;
        this.responseObject = response;

        if(this.responseObject.info.next==null){
          this.viewButtonNext = 'none';
        }else {
          this.viewButtonNext = 'inline'
        }

        if(this.responseObject.info.prev==null){
          this.viewButtonAnt = 'none';
        }else {
          this.viewButtonAnt = 'inline'
        }
    });
  }

  public onClickModal(modalOn:string):void {
    //this.modal = modalOn;
  }
  
}
