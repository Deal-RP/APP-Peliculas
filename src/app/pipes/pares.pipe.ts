import { Pipe, PipeTransform } from '@angular/core';

//Nombre del pipe
@Pipe({
  name: 'pares'
})
export class ParesPipe implements PipeTransform {

  transform( arr: any[] ): any[] {

    //Crear arreglos de arreglos de 2 posiciones
    const pares = arr.reduce( (result, value, index, array) => {

      //Cada dos peliculas lo inserta en el arreglo result
      if ( index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []);

    return pares;
 }

}
