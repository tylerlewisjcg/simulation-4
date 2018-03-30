require('dotenv').config();
const express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    massive = require('massive');
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
app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))
})
    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET
    }))
