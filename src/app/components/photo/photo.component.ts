import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-photo',
  imports: [NgStyle],
  templateUrl: './photo.component.html',
  styleUrl: './photo.component.css'
})
export class PhotoComponent {
  @Input() sprite1:string = '';
  @Input() sprite2:string = '';
  @Input() sprite3:string = '';
  @Input() sprite4:string = '';
  public imgsVisible:string = 'inline';
  public imgSprite:string ='';

  public onClickImg(sImg:string):void {
    this.imgsVisible = 'none';
    this.imgSprite = sImg;


  }
}
