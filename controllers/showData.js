import chalk from "chalk";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
                console.log(chalk.yellow(`type CTRL+C to exit`))
            }
            else {
                console.log(chalk.hex('#87b9e8')(`
                Name: ${isAnswer.name}
                Id: ${isAnswer.id}
                Asset Name: ${isAnswer.assetName}
                Local Name: ${JSON.stringify(isAnswer.localizedNames)}
                `));
                console.log(chalk.yellow(`type CTRL+C to exit`))
            }
        }
        else {
            console.log(chalk.yellow("Please enter a valid Name."));
        }
    })
}

export default showData;