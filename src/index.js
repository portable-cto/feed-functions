if (process.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const app = new (require('express'))();
const routes = require('./routes');

// Load routes
app.use('/', routes);

// Start the process
app.listen(process.env.PORT || 3000);