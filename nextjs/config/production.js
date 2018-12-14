require("dotenv").config({ path: "./.env.production" });

module.exports = {
  api: {
    url: process.env.API_URL
  }
};
