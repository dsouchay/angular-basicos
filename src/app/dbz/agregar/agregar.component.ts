import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent  {

  @Input()
  nuevo:Personaje={
    nombre:'',
    poder:0
  }
 /*@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();*/

  constructor(public dbzService: DbzService) { }

  agregar(): void {
    if (!this.nuevo.nombre.trim()) { return; }
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = { nombre: '', poder: 0 };
  }

}