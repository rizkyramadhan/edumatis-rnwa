const path = require("path");
const chokidar = require("chokidar");
const fs = require("fs-extra");

const delay = duration =>
  new Promise(resolve => setTimeout(() => resolve(), duration));

function copy(srcDir, srcRelativePath, destDir) {
  const fullSrcPath = path.join(srcDir, srcRelativePath);
  const fullDestPath = path.join(destDir, srcRelativePath);

  return fs
    .ensureDir(path.dirname(fullSrcPath))
    .then(() => fs.copy(fullSrcPath, fullDestPath));
}

function remove(srcDir, srcRelativePath, destDir) {
  const fullDestPath = path.join(destDir, srcRelativePath);

  return fs.remove(fullDestPath);
}

const sync = (srcDir, destDir, opts) => {
  const watcher = chokidar.watch(srcDir, {
    ignoreInitial: false,
    ignored: opts.ignored || path.join(srcDir, "**", "node_modules")
  });

  const log = opts.log || (() => {});
  const onError = opts.error || (() => {});

  const relative = srcFullPath => path.relative(srcDir, srcFullPath);

  watcher.on("add", path => {
    copy(srcDir, relative(path), destDir)
      .then(() => log({ relative: relative(path), type: "add" }))
      .catch(onError);
  });

  watcher.on("change", path => {
    copy(srcDir, relative(path), destDir)
      .then(() => log({ relative: relative(path), type: "change" }))
      .catch(onError);
  });

  watcher.on("unlink", path => {
    remove(srcDir, relative(path), destDir)
      .then(() => log({ relative: relative(path), type: "unlink" }))
      .catch(onError)
      .then(() => delay(1000))
      .then(() => copy(srcDir, relative(path), destDir))
      .catch(() => {});
  });
};

sync("../mobile/app", "../web/pages/app", {
  ignored: path.join("../mobile/app/libs")
});
