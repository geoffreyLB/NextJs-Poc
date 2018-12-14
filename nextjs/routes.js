const routes = require("next-routes");

module.exports = routes().add("jobs", "/jobs/:id", "/jobs/show");
