Package.describe({
  name: "brucejo:body-events",
  summary: "Get Template.body.events() working",
  version: "0.1.7",
  git: "https://github.com/gwendall/meteor-body-events"
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
