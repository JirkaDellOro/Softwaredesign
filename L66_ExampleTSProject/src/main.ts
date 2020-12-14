import ConsoleHandling from "./classes/ConsoleHandling"
import { Person } from "./classes/Person";
import { Pi } from "./const/Pi";

// ConsoleHandling.question("ABC");
let myself : any;

myself = new Person("Chris", 29);

ConsoleHandling.printInput(myself.sayMyNameAndAge());