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
      'mdl/material.css',
      'mdl/material.js'
    ], 'client'
  );
});
