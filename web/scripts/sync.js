const fs = require("fs");
const path = require("path");
const afterSync = e => {
  const relPath = e.relativePath;
  const appPath = path.join(process.cwd(), "src", "app", relPath);
  const appWebPath = path.join(process.cwd(), "websrc", relPath);

  let logtext = `Syncing ${relPath}`;

  if (fs.existsSync(appWebPath)) {
    if (fs.lstatSync(appWebPath).isFile()) {
      setTimeout(() => {
        fs.createReadStream(appWebPath).pipe(fs.createWriteStream(appPath));
      }, 100);
      logtext += " [overriden from websrc]";
      console.log(logtext);
      return false;
    }
  }
};

setTimeout(() => {
  const appPath = path.join(process.cwd(), "src", "app");
  const appWebPath = path.join(process.cwd(), "websrc");
  require("sync-directory")(appWebPath, appPath, {
    watch: true,
    copy: true,
    deleteOrphaned: true,
    filter: e => {
      return false;
    },
    afterSync
  });
}, 100);

require("sync-directory")("../mobile/app", "./src/app", {
  watch: true,
  copy: true,
  deleteOrphaned: true,
  filter: e => {
    const relPath = e.substr(13);
    const appPath = path.join(process.cwd(), "src", "app", relPath);
    const appWebPath = path.join(process.cwd(), "websrc", relPath);

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
      const mobilePath = path.join(
        process.cwd(),
        "..",
        "mobile",
        "app",
        relPath
      );
      const appPath = path.join(process.cwd(), "src", "app", relPath);
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
