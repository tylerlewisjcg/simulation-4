module.exports = {
    post: (req, res, next) => {
        let { username, password} = req.body;
    
        req.app
          .get("db")
          .add_user([username, password])
          .then(user => res.status(200).send(user.data))
          .catch(err => res.sendStatus(500));
      },
      login: (req, res, next) => {
        const db = req.app.get('db')
        const { name, password } = req.body;

        db.login_user(name, password)
            .then((user) => {
                console.log(user)
                res.status(200).send(user)
            
            })
    }
    }