import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //Donde se almacena lo escrito en la barra de busqueda
  textoBuscar = '';

  //Manejo de spinner para mostrar
  buscando = false;

  //Resultado de busqueda
  peliculas: Pelicula[] = [];

  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos', 'Venom', 'Hasta el ultimo hombre'];

  constructor( private moviesService: MoviesService,
               private modalCtrl: ModalController) { }


  //Logica para buscar
  buscar( event ) {

    //Obtener el dato dentro de la barra de busqueda
    const valor: string = event.detail.value;

    //Al limpiar la busqueda, limpiar coincidencias y quitar spinner y salir de busqueda
    if ( valor.length === 0 ) {
      this.buscando = false;
      this.peliculas = [];
      return;
    }

    //Activar spinner
    this.buscando = true;

    //Buscar la pelicula por medio del nombre
    this.moviesService.buscarPeliculas( valor )
        .subscribe( resp => {
          console.log( resp );
          //Almacenar las peliculas
          this.peliculas = resp['results'];
          //Quitar el spinner
          this.buscando = false;
        });
  }

  //Abrir el modal de detalles por pelicula
  async detalle( id: string ) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }

}
