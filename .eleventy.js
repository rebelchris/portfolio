const fs = require("fs");

module.exports = function (config) {
  // Layout aliases
  config.addLayoutAlias("home", "layouts/home.njk");

  // Passthrough copy
  config.addPassthroughCopy("src/images");
  config.addPassthroughCopy("src/js");

  // 404
  config.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync("dist/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  return {
    dir: {
      input: "src",
      output: "dist",
    },
    passthroughFileCopy: true,
  };
};
