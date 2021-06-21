// this objects are instances of a singleton pattern
import ConsoleHandling from "./classes/ConsoleHandling";
import FileHandler from "./classes/FileHandler";

// regular classes
import { Movie } from "./classes/Movie";
import { NullMovie } from "./classes/NullMovie";
import { Actor } from "./classes/Actor";
import { MovieDAO } from "./types/moviedao.type";
import { ActorDAO } from "./types/actordao.type";
import { AbstractMovie } from "./classes/abstracts/AbstractMovie";
import { accessSync } from "fs";

export class MovieDatabase {
  private _movies: Movie[] = [];
  private _actors: Actor[] = [];

  constructor() {
    let moviesJson: MovieDAO[] = FileHandler.readArrayFile('../data/movies.json');
    let actorsJson: ActorDAO[] = FileHandler.readArrayFile('../data/actors.json');

    // let specificActorJson : ActorDAO = FileHandler.readObjectFile('../data/actor.json');

    // let specificActor : Actor = new Actor(specificActorJson);

    // FileHandler.writeFile(`../data/${specificActor.id}.json`, specificActor);

    for (let movie of moviesJson) {
      this._movies.push(new Movie(movie));
    }

    for (let actor of actorsJson) {
      this._actors.push(new Actor(actor));
    }
  }

  public async showFunctionalities(): Promise<void> {
    let answer: String = await ConsoleHandling.showPossibilities(
      [
        "1. List all movies with release year and box office",
        "2. Search all movies by actor",
        "3. Search a movie by title",
        "4. Search by box office greater than"
      ],
      "Which function do you want to use? (default 1): ");

    this.handleAnswer(answer);
  }

  public async handleAnswer(answer: String) {
    switch (answer) {
      case "1":
        this.showMoviesWithBoxOffice();
        break;
      case "2":
        ConsoleHandling.printInput("search by actor");
        break;
      case "3":
        await this.searchMovieByTitle();
        break;
      case "4":
        ConsoleHandling.printInput("search by box office greater than");
        break;
      default:
        this.showMoviesWithBoxOffice();
        break;
    }
    await this.goNext();
  }

  public showMoviesWithBoxOffice(): void {
    ConsoleHandling.printInput("\n")

    for (let index in this._movies) {
      let movie: Movie = this._movies[index];
      let _index: Number = Number.parseInt(index) + 1;
      ConsoleHandling.printInput(`${_index}. Movie is ${movie.getMovieName()} with box office ${movie.getBoxOffice()} and release year ${movie.getReleaseYear()}`);
    }
  }

  public async searchMovieByTitle(): Promise<void> {
    let movieTitle: String = await ConsoleHandling.question("Which movie you are looking for? ")
    let movie: AbstractMovie = this._movies.filter((movie) => movie.getMovieName().match(new RegExp(`${movieTitle}`, 'gi')))[0];

    ConsoleHandling.printInput("\n")
    movie = movie !== undefined ? movie : new NullMovie();

    ConsoleHandling.printInput(movie.getMovieName().toString());
  }

  public async goNext(): Promise<void> {
    let answer: String = await ConsoleHandling.question("Back to overview? ");
    switch (answer.toLowerCase()) {
      case "y":
      case "yes":
      default:
        this.showFunctionalities();
        break;
      case "n":
      case "no":
        ConsoleHandling.closeConsole()
        break;
    }
  }
}