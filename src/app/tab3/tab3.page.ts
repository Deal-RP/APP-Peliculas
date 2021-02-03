import { Component, OnInit } from '@angular/core';
import { PeliculaDetalle, Genre } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  //Las peliculas almacenadas
  peliculas: PeliculaDetalle[] = [];
  //Los generos disponibles
  generos: Genre[] = [];

  //Objeto con atributo genero y arreglo de peliculas
  favoritoGenero: any[] = [];

  constructor( private dataLocal: DataLocalService,
               private moviesService: MoviesService  ) { }


    //Se dispara cada vez que la pagina vaya a entrar
  async ionViewWillEnter() {
    //Cargar las peliculas favoritas al arreglo
    this.peliculas = await this.dataLocal.cargarFavoritos();
    //Cargar los diferentes generos al arreglo
    this.generos = await this.moviesService.cargarGeneros();
    //Llenar favoritoGenero ordenado
    this.pelisPorGenero( this.generos, this.peliculas );
  }


  pelisPorGenero( generos: Genre[], peliculas: PeliculaDetalle[]  ) {
    //Inicializar el objeto como arreglo
    this.favoritoGenero = [];

    //Por cada genero en el arreglo generos se realiza lo siguiente
    generos.forEach( genero => {

      //Se agrega al objeto con el nombre y el arreglo filtrado de peliculas 
      this.favoritoGenero.push({
        genero: genero.name,
        pelis: peliculas.filter( peli => {
          return peli.genres.find( genre => genre.id === genero.id );
        })
      });

    });
  }

}
