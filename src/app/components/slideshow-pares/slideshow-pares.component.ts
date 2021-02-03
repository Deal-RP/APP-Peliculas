import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss']
})
export class SlideshowParesComponent implements OnInit {

  //Obtener las peliculas
  @Input() peliculas: Pelicula[] = [];
  //Mandar el evento
  @Output() cargarMas = new EventEmitter();

  //Manejo de como mostrar los items del slide
  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
  }

  //Emite al padre que hay que cargar mas peliculas
  onClick() {
    this.cargarMas.emit();
  }

  //Utilizar el modal para abrir la pantalla de detalles
  async verDetalle( id: string ) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }

}
