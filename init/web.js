
const shell = require("shelljs");

shell.exec(`node init/sync.js`, { async: true });
shell.cd("web");
shell.exec("yarn dev", { async: true });