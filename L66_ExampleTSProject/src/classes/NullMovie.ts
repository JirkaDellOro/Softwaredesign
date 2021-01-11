import { extend } from "lodash";
import { AbstractMovie } from "./abstracts/AbstractMovie";

export class NullMovie extends AbstractMovie {
  constructor() {
    super();
    this.setMovieName("No movie found with this title!");
    this.setReleaseYear(0);
    this.setBoxOffice(0);
    this.setDirector("");
    this.setActors([]);
  }
}