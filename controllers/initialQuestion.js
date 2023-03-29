import showData from "./showData.js";
import readline from "readline";
import chalk from "chalk";
import data from "../api/getData.js";


// destructure the data object
const { characters, skins, maps, chromas, skinLevels, equips, gameModes, sprays, sprayLevels, playerCards, playerTitles, ceremonies } = data

// create a readline interface to get the user input and show the data

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const Questions = () => {
    rl.question(chalk.blue("Please enter what you want to see: "), (answer) => {
        switch (answer) {
            case "1":
                showData(characters, "characters");
                break;

            case "2":
                showData(skins, 'skins');
                break;

            case "3":
                showData(maps, 'maps');
                break;

            case "4":
                showData(chromas, 'chromas');
                break;

            case "5":
                showData(skinLevels, 'skin levels');
                break;

            case "6":
                showData(equips, 'equips');
                break;

            case "7":
                showData(gameModes, 'game modes');
                break;

            case "8":
                showData(sprays, 'sprays');
                break;

            case "9":
                showData(sprayLevels, 'spray levels');
                break;

            case "10":
                showData(playerCards, 'player cards');
                break;

            case "11":
                showData(playerTitles, 'player titles');
                break;

            case "12":
                showData(ceremonies, 'ceremonies');
                break;

            case "exit":
                console.log(chalk.green("Goodbye. see you soon!"));
                break;

            default:
                console.log(chalk.yellow("Please enter a valid number."));
                break;
        }
    })
}

export default Questions;