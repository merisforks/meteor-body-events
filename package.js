Package.describe({
  name: "merisfork:body-events",
  summary: "Get Template.body.events() working",
  version: "0.1.8",
  git: "https://github.com/merisforks/meteor-body-events"
});

Package.onUse(function (api, where) {

  api.use([
    "templating",
    "jquery"
  ], "client");

  api.addFiles([
    "lib.js"
  ], "client");

});
