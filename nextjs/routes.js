const routes = require("next-routes");

module.exports = routes()
  .add("jobs")
  .add("jobs/create", "/jobs/create", "/jobs/create")
  .add("jobs/show", "/jobs/:id", "/jobs/show")
  .add("jobs/edit", "/jobs/:id/edit", "jobs/edit");
