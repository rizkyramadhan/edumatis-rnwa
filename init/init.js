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
  .then(async answer => {
    const name = answer["Project Name"]
      .replace(/[^a-z0-9+]+/gi, "")
      .toLowerCase();

    fs.writeFileSync(
      "../mobile/app.json",
      `{
        "name": "${name}",
        "displayName": "${name}"
      }`
    );

    if (
      !!fs.existsSync("../mobile/android") ||
      !!fs.existsSync("../mobile/ios")
    ) {
      const del = await inquirer.prompt([
        {
          name: "delete",
          type: "confirm",
          message:
            "This project is already created, Do you want to remove it (will delete mobile/android and mobile/ios) ?"
        }
      ]);
      if (del.delete) {
        shell.rm("-rf", "../mobile/android");
        shell.rm("-rf", "../mobile/ios");
      } else {
        shell.exit(1);
      }
    }

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

    console.log("• Cloning backend");
    shell.exec(
      "git clone https://rizky@bitbucket.org/andromedia/rnwa-backend.git backend"
    );
    shell.cp("init/backend-config.ts", "backend/config.ts");
    shell.exec("mv backend/.git backend/.git-original");
    shell.cd("backend");
    shell.exec("git init");
    shell.exec("git commit -am 'initial commit'");
    shell.cd("..");

    console.log("• Cloning libs");
    shell.exec(
      "git clone https://rizky@bitbucket.org/andromedia/rnwa-libs.git mobile/app/libs"
    );

    console.log("• Cloning web-override");
    shell.exec(
      "git clone https://rizky@bitbucket.org/andromedia/rnwa-web-override.git web/app-override"
    );

    console.log("• Running yarn on mobile");
    shell.cd("mobile");
    shell.exec("yarn");
    shell.exec("react-native eject");

    console.log("• Running yarn on web");
    shell.cd("../web");
    shell.exec("yarn");

    const del = await inquirer.prompt([
      {
        name: "delete",
        type: "confirm",
        message: "Do you want to remove .git folder ?"
      }
    ]);
    if (del.delete) {
      shell.rm("-rf", ".git");
    }
  });
