if (process.NODE_ENV !== "production") {
  require("dotenv").config();
}
const app = new (require("express"))();

// Body parser
app.use(require("body-parser").json());

// Log requests
const expressLogging = require("express-logging");
const logger = require("logops");
app.use(expressLogging(logger));

// Load routes
app.use("/", require("./endpoints/ping"));
app.use("/rss-to-email", require("./endpoints/rss-to-email"));

// Start the process
const server = app.listen(process.env.PORT || 3000);
module.exports = server;
