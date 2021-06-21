import { MovieDAO } from "../types/moviedao.type";
import { AbstractMovie } from "./abstracts/AbstractMovie";

export class Movie extends AbstractMovie {
  constructor(movie: MovieDAO) {
    super();
    this.setMovieName(movie.movie_name);
    this.setReleaseYear(movie.release_year);
    this.setBoxOffice(movie.box_office);
    this.setDirector(movie.director);
    this.setActors(movie.actors);
  }
}