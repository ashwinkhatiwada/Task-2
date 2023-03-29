import data from "./api/getData.js";
import chalk from "chalk";
import readline from "readline";

// destructure the data object
const { characters, skins, maps, chromas, skinLevels, equips, gameModes, sprays, sprayLevels, playerCards, playerTitles, ceremonies } = data

console.group();
console.log(chalk.red(`WELCOME TO VALORANT.
Valorant is a free-to-play tactical first-person shooter game developed and published by Riot Games.
It was released for Microsoft Windows in June 2020. The game features two teams of five players each,
with each player assuming the role of an agent with unique abilities and playstyles.\n
Please choose what you want to see. \n`))

console.log(chalk.green(`1. Characters`));
console.log(chalk.green(`2. Skins`));
console.log(chalk.green(`3. Maps`));
console.log(chalk.green(`4. Chromas`));
console.log(chalk.green(`5. Skin Levels`));
console.log(chalk.green(`6. Equips`));
console.log(chalk.green(`7. Game Modes`));
console.log(chalk.green(`8. Sprays`));
console.log(chalk.green(`9. Spray Levels`));
console.log(chalk.green(`10.Player Cards`));
console.log(chalk.green(`11.Player Titles`));
console.log(chalk.green(`12.Ceremonies `));
console.log(chalk.yellow(`exit: Exit the program\n`))
console.groupEnd();


// create a readline interface to get the user input and show the data
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(chalk.blue("Please enter a number for what you want to know: "), (answer) => {

    switch (answer) {
        case "1":
            console.log(`asasgga`)
            break;

        case "2":
            console.log(`2`)
            break;

        case "3":
            console.log(`3`)
            break;

        case "4":
            console.log(`4`)
            break;

        case "5":
            console.log(`5`)
            break;

        case "6":
            console.log(`6`)
            break;

        case "7":
            console.log(`7`)
            break;

        case "8":
            console.log(`8`)
            break;

        case "9":
            console.log(`9`)
            break;

        case "10":
            console.log(`10`)
            break;

        case "11":
            console.log(`11`)
            break;

        case "12":
            console.log(`12`)
            break;

        case "exit":
            console.log(chalk.green("Exiting the program..."));
            break;

        default:
            console.log(chalk.yellow("Please enter a valid number."));
            break;
    }
    rl.close();
});