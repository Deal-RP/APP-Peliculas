import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  //Almacenar peliculas de cartelera
  peliculasRecientes: Pelicula[] = [];
  //Almacenar las peliculas populares
  populares: Pelicula[] = [];

  constructor( private moviesService: MoviesService ) {

  }


  //Cargar las peliculas en cartelera al iniciar la pantalla 
  ngOnInit() {
    this.moviesService.getFeature()
      .subscribe( resp => {
        //Almacenamos las peliculas recientes
        // console.log('Cartelera', resp.results);
        this.peliculasRecientes = resp.results;
      });
    
    //Obtener las peliculas con diferentes paginas
    this.getPopulares();
  }

  cargarMas() {
    //Obtener las peliculas con diferentes paginas
    this.getPopulares();
  }

  getPopulares() {
    //Obtener las peliculas con diferentes paginas
    this.moviesService.getPopulares()
    .subscribe( resp => {
      // console.log('Populares', resp.results);
      
      //Unir de forma individual las peliculas actuales con las nuevas
      const arrTemp = [ ...this.populares, ...resp.results ];
      this.populares = arrTemp;

    });
  }

}
