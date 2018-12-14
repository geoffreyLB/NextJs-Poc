require("dotenv").config({ path: "./.env.development" });

module.exports = {
  api: {
    url: process.env.API_URL
  }
};
