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


// since the data has the same properties, create a function to show the data
const showData = (item, name) => {
    console.group();
    console.log(chalk.hex('#4214d9')(`
    ${name.toUpperCase()} in Valorant
    Choose a number to see the details of the ${name}. \n`));

    // show the names of the items
    for (let i = 0; i < item.length; i++) {
        console.log(chalk.green(`${i + 1}. ${item[i].name}`));
    }
    console.log(chalk.yellow(`exit: Exit the program\n`))
    console.groupEnd();

    rl.question(chalk.blue(`Please enter the name to know more about the ${name}: `), (answer) => {
        const isAnswer = item.find((character) => character.name === answer);

        if (answer == "exit" || answer === "Null UI Data!") {
            console.log(chalk.green("Goodbye. see you soon!"));
        }

        // if the answer is not null, show the data
        else if (isAnswer) {
            if (isAnswer.assetPath) {
                console.log(chalk.hex('#87b9e8')(`
                Name: ${isAnswer.name}
                Id: ${isAnswer.id}
                Asset Name: ${isAnswer.assetName}
                Asset Path: ${isAnswer.assetPath}
                Local Name: ${JSON.stringify(isAnswer.localizedNames)}
                `));
                console.log(chalk.yellow("press ctrl + c to exit the program."))
            }
            else {
                console.log(chalk.hex('#87b9e8')(`
                Name: ${isAnswer.name}
                Id: ${isAnswer.id}
                Asset Name: ${isAnswer.assetName}
                Local Name: ${JSON.stringify(isAnswer.localizedNames)}
                `));
                console.log(chalk.yellow("press ctrl + c to exit the program."))
            }
        }
        else {
            console.log(chalk.yellow("Please enter a valid Name."));
        }
        rl.close();
    })


}

// create a readline interface to get the user input and show the data
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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