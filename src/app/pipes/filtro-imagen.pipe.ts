import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroImagen'
})
export class FiltroImagenPipe implements PipeTransform {

  //Quitar todas las peliculas que no tengan imagen
  //Uso exclusivo de pelicula por catalogo
  transform( peliculas: any[] ): any[] {
    return peliculas.filter( peli => {
      return peli.backdrop_path;
    });
  }

}
