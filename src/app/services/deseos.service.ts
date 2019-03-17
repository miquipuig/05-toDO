import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

 listas: Lista [] = [];

   constructor() {
       const lista1 = new Lista('Recolectar piedras del infinito');
       const lista2 = new Lista('Héroes a recolectar');

       this.listas.push( lista1, lista2);

   }

   crearLista( titulo: string) {
      this.listas.push (new Lista(titulo));
   }
   
}
