//Install express server
const express = require('express');
const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/test4heroku'));

app.all('*', (req, res) => {  
    res.status(200).sendFile(__dirname + '/dist/test4heroku/index.html');  
  });  
app.listen(process.env.PORT || 8080);