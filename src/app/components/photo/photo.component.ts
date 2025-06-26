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
  public viewBigPhoto:string = 'none';

  public onClickImg( nSprite:number):void {
    this.imgsVisible = 'none';
    this.viewBigPhoto = 'inline';
    switch(nSprite){
      case 1: this.imgSprite = this.sprite1;break;
      case 2: this.imgSprite = this.sprite2; break;
      case 3: this.imgSprite = this.sprite3; break;
      case 4: this.imgSprite = this.sprite4; break;
      default: this.imgSprite = this.sprite1;break;
    }
    //console.log(this.sprite1);
    //console.log(this.imgSprite);
  }

  public onClickImgOff():void {
    this.imgsVisible = 'inline';
    this.viewBigPhoto = 'none';
  }
}
