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