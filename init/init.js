const ora = require("ora");
const fs = require("fs");
const inquirer = require("inquirer");
const shell = require("shelljs");
console.log("\n\n");
inquirer
  .prompt([
    {
      name: "Project Name"
    }
  ])
  .then(answer => {
    const name = answer["Project Name"]
      .replace(/[^a-z0-9+]+/gi, "")
      .toLowerCase();
    const spinner = ora("Generating " + name + "\n").start();

    fs.writeFileSync(
      "../mobile/app.json",
      `{
        "name": "${name}",
        "displayName": "${name}"
      }`
    );


    if (!!fs.existsSync("../mobile/android") || !!fs.existsSync("../mobile/ios")) {
      shell.echo(
        "Sorry, folder mobile/android or mobile/ios already exists. Please remove those folder then try again."
      );
      shell.exit(1);
    }

    shell.rm("-rf", "../mobile/android");
    shell.rm("-rf", "../mobile/ios");

    if (!shell.which("react-native")) {
      shell.echo(
        "Sorry, this script requires react-native. Please install using npm i -g react-native-cli"
      );
      shell.exit(1);
    }

    if (!shell.which("yarn")) {
      shell.echo(
        "Sorry, this script requires yarn. Please install using npm i -g yarn"
      );
      shell.exit(1);
    }


    // console.log("• Removing .git directory");

    shell.cd("..");
    // shell.rm("-rf", ".git");

    console.log("• Running yarn on mobile");
    shell.cd("mobile");
    shell.exec("yarn");
    shell.exec("react-native eject");

    console.log("• Running yarn on web");
    shell.cd("../web");
    shell.exec("yarn");

    console.log("\n• Done ");
    spinner.stop();
  });
