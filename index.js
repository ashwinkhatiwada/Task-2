import datas from "./getData.js";
import chalk from "chalk";
import readline from "readline";

const { characters, skins, maps, chromas, skinLevels, equips, gameModes, sprays, sprayLevels, playerCards, playerTitles, ceremonies } = datas

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


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(chalk.blue("Please enter what you want to see: "), (answer) => {
    switch (answer) {
        case "1":
            console.group();
            console.log(chalk.hex('#4214d9')(`
            Characters in valorant:
            Choose a number to see the details of the character.`));

            for (let i = 0; i < characters.length; i++) {
                console.log(chalk.green(`${i + 1}. ${characters[i].name}`));
            }
            console.log(chalk.yellow(`exit: Exit the program\n`))
            console.groupEnd();

            rl.question(chalk.blue("Please enter the name to know more about the character: "), (answer) => {
                const isAnswer = characters.find((character) => character.name === answer);

                if (answer == "exit" || answer === "Null UI Data!") {
                    console.log(chalk.green("Goodbye. see you soon!"));
                }
                else if (isAnswer) {
                    console.log(chalk.hex('#87b9e8')(`
                        Name: ${isAnswer.name}
                        Id: ${isAnswer.id}
                        Asset Name: ${isAnswer.assetName}
                        `));
                }
                else {
                    console.log(chalk.yellow("Please enter a valid Name."));
                }
                rl.close();
            })
            break;

        case "2":
            console.log(skins);
            break;

        case "3":
            console.log(maps);
            break;

        case "4":
            console.log(chromas);
            break;

        case "5":
            console.log(skinLevels);
            break;

        case "6":
            console.log(equips);
            break;

        case "7":
            console.log(gameModes);
            break;

        case "8":
            console.log(sprays);
            break;

        case "9":
            console.log(sprayLevels);
            break;

        case "10":
            console.log(playerCards);
            break;

        case "11":
            console.log(playerTitles);
            break;

        case "12":
            console.log(ceremonies);
            break;

        case "exit":
            console.log(chalk.green("Goodbye. see you soon!"));
            break;

        default:
            console.log(chalk.yellow("Please enter a valid number."));
            break;
    }
    // rl.close();
})