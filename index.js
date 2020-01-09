// Initializing express
const express = require('express');
const routes = require('./routes/routes');
const app = express();

//Default port
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

// Support JSON-encoded bodies
app.use(bodyParser.json());
// Support URL-encoded bodies
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', routes);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  } else {
		console.log(`Server is listening on ${port}`);
	}
});