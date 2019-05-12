const fs = require("fs");
const path = require("path");
const shell = require("shelljs");
// const afterSync = e => {
//   const relPath = e.relativePath;
//   const appPath = path.join(process.cwd(), "web", "pages", "app", relPath);
//   const appWebPath = path.join(process.cwd(), "web", "pages", "index", relPath);

//   let logtext = `Syncing ${relPath}`;

//   if (fs.existsSync(appWebPath)) {
//     if (fs.lstatSync(appWebPath).isFile()) {
//       setTimeout(() => {
//         fs.createReadStream(appWebPath).pipe(fs.createWriteStream(appPath));
//       }, 100);
//       logtext += " [overriden from app-override]";
//       console.log(logtext);
//       return false;
//     }
//   }
// };

// setTimeout(() => {
//   const appPath = path.join(process.cwd(), "mobile", "app");
//   const appWebPath = path.join(process.cwd(), "web", "app-override");
//   require("sync-directory")(appWebPath, appPath, {
//     watch: true,
//     copy: true,
//     deleteOrphaned: true,
//     filter: e => {
//       return false;
//     },
//     afterSync
//   });
// }, 100);

shell.exec(`rm -rf ${process.cwd()}/web/pages/app`);
console.log("• Cloning libs - web");
shell.exec("rm -rf web/pages/app/libs");
shell.exec(
  "git clone https://rizky@bitbucket.org/andromedia/rnwa-libs-web.git web/pages/app/libs"
);


require("sync-directory")("mobile/app", "web/pages/app", {
  watch: true,
  copy: true,
  deleteOrphaned: true,
  filter: e => {
    const relPath = e.substr("mobile/app".length);
    const appPath = path.join(process.cwd(), "web", "pages", "app", relPath);
    const appWebPath = path.join(process.cwd(), "web", "app-override", relPath);

    if (e.indexOf("mobile/app/libs") === 0) {
      return false;
    }

    if (fs.existsSync(appWebPath)) {
      if (fs.lstatSync(appWebPath).isFile()) {
        setTimeout(() => {
          fs.createReadStream(appWebPath).pipe(fs.createWriteStream(appPath));
        }, 100);
        return false;
      }
    }

    const stat = fs.statSync(e);
    if (stat.isDirectory()) {
      if (!fs.existsSync(appPath)) fs.mkdirSync(appPath, { recursive: true });
    } else if (stat.isFile()) {
      fs.copyFileSync(e, appPath);
    }
    return false;
  },
  afterSync: function(e) {
    if (e.type === "change") {
      const relPath = e.relativePath;
      const mobilePath = path.join(process.cwd(), "mobile", "app", relPath);
      const appPath = path.join(process.cwd(), "web", "pages", "app", relPath);

      if (relPath.indexOf("libs") === 1) {
        return false;
      }

      setTimeout(() => {
        const stat = fs.statSync(mobilePath);
        if (stat.isDirectory()) {
          if (!fs.existsSync(appPath))
            fs.mkdirSync(appPath, { recursive: true });
        } else if (stat.isFile()) {
          fs.copyFileSync(mobilePath, appPath);
          const recheck = () => {
            setTimeout(() => {
              if (stat.size > 0) {
                const astat = fs.statSync(appPath);
                if (astat.size === 0) {
                  fs.copyFileSync(mobilePath, appPath);
                  recheck();
                }
              }
            }, 100);
          };
          recheck();
        }
      }, 200);
    }
  }
});
