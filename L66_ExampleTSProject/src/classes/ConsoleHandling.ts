import * as readline from 'readline';

class ConsoleHandling {
  private static instance : ConsoleHandling = new ConsoleHandling()

  // logger object with syslog levels as specified loglevels
  // logs into build_service.log in directory log and onto console of running node.js process
  private consoleLine : readline.ReadLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  constructor() {
    if(ConsoleHandling.instance)
      throw new Error("Use ConsoleHandling.Instance() instead new ConsoleHandling()")
    ConsoleHandling.instance = this
  }

  public static getInstance() : ConsoleHandling {
    return ConsoleHandling.instance
  }

  public question(question: string, answers?: string[]) {
    this.consoleLine.question('Is this example useful? [y/n] ', (answer: string) => {
      switch(answer.toLowerCase()) {
        case 'y':
          console.log('Super!');
          break;
        case 'n':
          console.log('Sorry! :(');
          break;
        default:
          console.log('Invalid answer!');
      }
    });
  }

  public printInput(input: string) {
    this.consoleLine.write(input);
  }

  public closeConsole() {
    this.consoleLine.close();
  }
}

export default ConsoleHandling.getInstance();