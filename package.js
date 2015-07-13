/**
 * Created by gqadonis on 7/13/15.
 */
Package.describe({
  name: "tribemedia:mdl",
  summary: "Material Design Lite Package",
  version: "0.1.0",
  git: "https://github.com/tribemedia/meteor-mdl.git"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');

  api.addFiles([
      'mdl/_color-definitions.scss',
      'mdl/_mixins.scss',
      'mdl/_variables.scss',
      'mdl/material-design-lite.scss',
      'mdl/material-design-lite-grid.scss',
      'mdl/mdlComponentHandler.js'
    ], 'client'
  );
});
