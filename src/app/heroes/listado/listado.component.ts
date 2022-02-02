import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  selectHeroe: number = -1;
  heroeBorrado: string = ''

  selectedHeroe(value:number):void{
    this.selectHeroe = value;
  }

  borrarHeroes():void{
    if (this.selectHeroe>=0){}
      this.heroeBorrado =  this.heroes.splice(this.selectHeroe,1)[0];
    this.selectHeroe = -1;

  }

}
