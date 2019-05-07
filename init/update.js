const shell = require("shelljs");

shell.cd("..");

console.log("• Updating backend");
shell.exec("cd backend && git stash && git pull && git pop");

console.log("• Updating libs");
shell.exec("cd mobile/app/libs && git stash && git pull && git pop");

console.log("• Updating web-override");
shell.exec("cd web/app-override && git stash && git pull && git pop");
