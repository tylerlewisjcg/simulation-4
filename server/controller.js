module.exports = {
    post: (req, res, next) => {
        let { username, password} = req.body;
    
        req.app
          .get("db")
          .add_user([username, password])
          .then(user => res.status(200).send(user))
          .catch(err => res.sendStatus(500));
      },
      login: function(req, res, next) {
        const users = req.app.get('db')
        const { username, password } = req.body;
        if (user => user.username === req.body.username && user.password === req.body.password) {
          req.session.user.username = req.body.username;
          req.session.user.loggedIn = true;
    
          res.status(200).send(req.session.user);
        } else {
       
          res.sendStatus(500);
        }
      }
    }
    