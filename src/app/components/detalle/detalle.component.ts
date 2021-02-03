import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  //Recibir el id
  @Input() id;

  //Almance las peliculas
  pelicula: PeliculaDetalle = {};
  //Almacena los actores
  actores: Cast[] = [];
  //Valor preterminado a mostrar en la descripcion
  oculto = 150;
  //Manejo de icon estrella
  estrella = 'star-outline';

  //Manejo de los slideOpts
  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: 0
  };

  constructor( private moviesService: MoviesService,
               private modalCtrl: ModalController,
               private dataLocal: DataLocalService ) { }

  ngOnInit() {
    
    //Manejo de icon estrella por si esta o no en favorito
    this.dataLocal.existePelicula( this.id )
      .then( existe => this.estrella = ( existe ) ? 'star' : 'star-outline' );

    //Obtener los detalles de las peliculas
    this.moviesService.getPeliculaDetalle( this.id )
        .subscribe( resp => {
          console.log( resp );
          this.pelicula = resp;
        });

    //Obtener la informacion de los actores
    this.moviesService.getActoresPelicula( this.id )
        .subscribe( resp => {
          console.log( resp );
          this.actores = resp.cast;
        });

  }

  //Cerrar el modal
  regresar() {
    this.modalCtrl.dismiss();
  }

  //Logica para guardar la pelicula en favoritos
  favorito() {
    const existe = this.dataLocal.guardarPelicula( this.pelicula );
    this.estrella = ( existe ) ? 'star' : 'star-outline';
  }

}
