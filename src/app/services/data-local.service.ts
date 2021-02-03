import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  //Arreglo donde se almacena los detalles
  peliculas: PeliculaDetalle[] = [];


  constructor( private storage: Storage,
               private toastCtrl: ToastController  ) {
    
    //Carga los favoritos al momento de ser llamado este servicio
    this.cargarFavoritos();
  }


  //Se despliega el mensaje por medio de un Toast
  async presentToast( message: string ) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 1500
    });
    toast.present();
  }


  guardarPelicula( pelicula: PeliculaDetalle ) {

    //Bandera si existe
    let existe = false;
    //Manesaje a desplegar segun la accion
    let mensaje = '';

    //Buscar si existe la pelicula dentro del arreglo
    for ( const peli of this.peliculas ) {
      if ( peli.id === pelicula.id ) {
        existe = true;
        break;
      }
    }

    if ( existe ) {
      //Si existe se remueve de los favoritos
      this.peliculas = this.peliculas.filter( peli => peli.id !== pelicula.id );
      mensaje = 'Removido de favoritos';
    } else {
      //Sino existe se agrega de los favoritos
      this.peliculas.push( pelicula );
      mensaje = 'Agregada a favoritos';
    }

    //Se depliega un mensaje flotante con la accion realizada
    this.presentToast( mensaje );
    //Se almacenan los cambios
    this.storage.set('peliculas', this.peliculas );

    return !existe;
  }

  //Obtener las peliculas guardadas
  async cargarFavoritos() {

    const peliculas = await this.storage.get('peliculas');
    //Si regresa null se inicializa el arreglo sino almacena las peliculas
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  //Evalua si la pelicula esta almacenada por id
  async existePelicula( id ) {

    await this.cargarFavoritos();
    const existe = this.peliculas.find( peli => peli.id === id );

    return (existe) ? true : false;
  }

}
