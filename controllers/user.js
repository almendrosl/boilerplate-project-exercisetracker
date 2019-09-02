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

exports.addExercise = (req, res, next) => {
    const date = req.body.date ? req.body.date : undefined;
    const exercise = { description: req.body.description, duration: req.body.duration, date: date };
    User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { exercises: exercise } },
        function (err, success) {
            if (err) return next({ status: 400, message: err.reason.message });
            res.json(success);
        }
    );
};