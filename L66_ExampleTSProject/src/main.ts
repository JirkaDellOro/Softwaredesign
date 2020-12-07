import { Actor } from "./classes/Actor";
import ConsoleHandling from "./classes/ConsoleHandling"
import { Person } from "./classes/Person";
import { Pi } from "./const/Pi";


// ConsoleHandling.question("ABC");
let myself : any;

myself = new Person("Chris", 29);

myself = new Actor("Brad Pitt", 52, "14-03-1968");

let firstActor : Actor = new Actor("Brad Pitt", 52, "14-03-1968");

ConsoleHandling.printInput(myself.sayMyNameAndAge());