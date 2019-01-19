if (process.NODE_ENV !== "production") {
  require("dotenv").config();
}
const app = new (require("express"))();

// Load routes
app.use("/", require('./endpoints/ping'));
app.use("/rss-to-email", require('./endpoints/rss-to-email'));

// Start the process
const server = app.listen(process.env.PORT || 3000);
module.exports = server;
