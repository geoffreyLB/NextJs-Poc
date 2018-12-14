const routes = require("next-routes");

module.exports = routes()
  .add("jobs")
  .add("jobs/show", "/jobs/:id", "/jobs/show")
  .add("jobs/edit", "/jobs/:id/edit", "jobs/edit");
