import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss']
})
export class SlideshowBackdropComponent implements OnInit {

  //Recibir las peliculas
  @Input() peliculas: Pelicula[] = [];

  //Manejo de los slideOpts
  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true
  };

  constructor( private modalCtrl: ModalController ) { }

  ngOnInit() {
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
