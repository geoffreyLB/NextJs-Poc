const routes = require("next-routes");

module.exports = routes()
  .add("jobs/create", "/jobs/create", "/jobs/create")
  .add("jobs/edit", "/jobs/:id/edit", "/jobs/edit")
  .add("jobs/show", "/jobs/:id", "/jobs/show");
