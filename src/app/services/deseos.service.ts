import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';
import { ListasComponent } from '../components/listas/listas.component';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

 listas: Lista [] = [];

   constructor() {

      this.cargarStorage();

      //  const lista1 = new Lista('Recolectar piedras del infinito');
      //  const lista2 = new Lista('Héroes a recolectar');
      //  this.listas.push( lista1, lista2);

   }

   crearLista( titulo: string) {
      const nuevaLista = new Lista(titulo);
      this.listas.push (nuevaLista);
      this.guardarStorage();

      return nuevaLista.id;
   }

   obtenerLista( id: string | number) {
      id = Number(id);
      return this.listas.find( listaData => {
        return listaData.id === id;
      });

   }


   guardarStorage() {
    localStorage.setItem('data', JSON.stringify(this.listas));
   }

   cargarStorage() {
     if (localStorage.getItem('data')) {
       this.listas = JSON.parse(localStorage.getItem('data'));
     } else {
       this.listas = [];
     }
   }
   borrarLista(lista: Lista) {
      this.listas = this.listas.filter(listaD => {
        return listaD.id !== lista.id;
      });
      this.guardarStorage();
   }

   modificarLista(titulo: string, lista: Lista) {
    lista.titulo = titulo;


    this.guardarStorage();
 }
}
