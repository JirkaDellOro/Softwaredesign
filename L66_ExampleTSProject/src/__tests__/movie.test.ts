import { Movie } from "../classes/Movie";

describe("This is a simple test", () => {
    test("Check the Mailaddress function", () => {
        let movieDao = {
          movie_name: "abc",
          release_year: 2018,
          box_office: 100,
          director: "abc",
          actors: ["abc","def"]
        };
        let movie = new Movie(movieDao);
        expect(movie.getMovieName()).toBe("abc");
    });
});