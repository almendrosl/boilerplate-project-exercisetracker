const User = require('../models/user');

exports.addUser = (req, res) => {
    let user = new User(
        {
            username: req.body.username
        }
    );

    user.save(function (err, user) {
        if (err) {
            if (err.code === 11000) {
                res.send("username already taken");
            } else {
                throw err;
            }
        } else {
            res.json(user);
        }
    })
};

exports.getAllUsers = (req, res) => {
    User.find((err, users) => {
        if (err) throw err;
        res.json(users);
    })
}