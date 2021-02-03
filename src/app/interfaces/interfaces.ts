//Manejo de tipado del arreglos de peliculas
export interface RespuestaMDB {
  page: number;
  total_results: number;
  total_pages: number;
  results: Pelicula[];
}

//Manejo de tipado de las peliculas individuales
export interface Pelicula {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path?: string;
  adult: boolean;
  overview: string;
  release_date: string;
}

//Manejo de tipado de los detalles de la pelicula
//Opcionales
export interface PeliculaDetalle {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: any;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: Productioncompany[];
  production_countries?: Productioncountry[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: Spokenlanguage[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

//Lenguaje que hablan
interface Spokenlanguage {
  iso_639_1: string;
  name: string;
}

//Donde se realizao la pelicula
interface Productioncountry {
  iso_3166_1: string;
  name: string;
}

//Nombre de la productora
interface Productioncompany {
  id: number;
  logo_path?: string;
  name: string;
  origin_country: string;
}

//Genero de pelicula
export interface Genre {
  id: number;
  name: string;
}

//Actores y crew
export interface RespuestaCredits {
  id: number;
  cast: Cast[];
  crew: Crew[];
}

//para cada integrante del Crew
export interface Crew {
  credit_id: string;
  department: string;
  gender: number;
  id: number;
  job: string;
  name: string;
  profile_path?: string;
}

//Para cada actor
export interface Cast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  name: string;
  order: number;
  profile_path?: string;
}
