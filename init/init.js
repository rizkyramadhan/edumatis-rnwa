const fs = require("fs");
const inquirer = require("inquirer");
const shell = require("shelljs");
console.log("\n\n");

if (
  !!fs.existsSync("../mobile/android") ||
  !!fs.existsSync("../mobile/ios")
) {
  shell.cd("..");
  if (fs.existsSync("mobile/app/libs/ui")) {
    shell.exec("git -C mobile/app/libs pull")
  } else {
    shell.exec("rm -rf mobile/app/libs")
    shell.exec(
      "git clone https://rizky@bitbucket.org/andromedia/rnwa-libs-mobile.git mobile/app/libs"
    );
  }

  if (fs.existsSync("web/pages/app/libs/ui")) {
    shell.exec("git -C web/pages/app/libs pull")
  } else {
    shell.exec("rm -rf web/pages/app/libs")
    shell.exec(
      "git clone https://rizky@bitbucket.org/andromedia/rnwa-libs-web.git web/pages/app/libs"
    );
  }

  console.log("• Running yarn on mobile");
  shell.cd("mobile");
  shell.exec("yarn");

  console.log("• Running yarn on web");
  shell.cd("../web");
  shell.exec("yarn");
  return
}

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
    if (fs.existsSync("backend/.git-original")) {
      shell.exec("rm -rf backend/.git");
    }

    shell.exec("mv backend/.git backend/.git-original");
    shell.cd("backend");
    shell.exec("git init");
    shell.exec("git add .");
    shell.exec("git commit -am 'initial commit'");
    shell.cd("..");

    console.log("• Cloning libs - mobile");
    shell.exec("rm -rf mobile/app/libs");
    shell.exec(
      "git clone https://rizky@bitbucket.org/andromedia/rnwa-libs-mobile.git mobile/app/libs"
    );

    console.log("• Cloning libs - web");
    shell.exec("rm -rf web/pages/app/libs");
    shell.exec(
      "git clone https://rizky@bitbucket.org/andromedia/rnwa-libs-web.git web/pages/app/libs"
    );

    console.log("• Running yarn on mobile");
    shell.cd("mobile");
    shell.exec("yarn");
    shell.exec("react-native eject");

    console.log("• Running yarn on web");
    shell.cd("../web");
    shell.exec("yarn");

    shell.cd("..");

    if (!fs.existsSync(".git-original") && fs.existsSync(".git")) {
      shell.exec("mv .git .git-original");
    }
  });
