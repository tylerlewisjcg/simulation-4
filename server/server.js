require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive'),
    controller = require('./controller');
    const checkForSession = require('./middleware/checkForSession');

    const port = process.env.PORT || 3333;
    const {
        SERVER_PORT,
        SESSION_SECRET,
        CONNECTION_STRING
      } = process.env;

    const app = express();

    app.use(bodyParser.json());
    massive(CONNECTION_STRING)
.then(db => {app.set('db', db)
})
    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET
    }))


app.post("/api/newuser", controller.post);
app.post('/api/login', controller.login)

  app.get("/api/logout", (req, res) => {
    req.logOut();
    res.redirect("http://localhost:3333/");
  });


app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))