import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

//URL para complentar el link de peticion
const URL = environment.imgPath;

//Nombre del pipe para usarlo por parte de HTML
@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  //Obtener la imagen
  //img -> identificador de la imagen
  //size -> dimension de las imagenes
  transform( img: string, size: string = 'w500'): string {

    //Colocar una imagen por defecto si el servicio no la tiene
    if ( !img ) {
      return './assets/no-image-banner.jpg';
    }

    //Construccion de url para ser llamada por el servicio
    const imgUrl = `${ URL }/${ size }${ img }`;

    return imgUrl;
  }

}
