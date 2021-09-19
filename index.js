const express = require('express');
const app = express();
app.use(express.json());

const { User } = require('./models');
const { check, validationResult } = require('express-validator');

app.use(express.urlencoded({
    extended: false
}))

app.get('/users', (req, res) => {
    User.findAll().then((dataoi) => {
        // res.status(200).json(dataoi);
        res.json({
            message: "Success",
            data: dataoi
        })
    });
});

// app.post('/users', (req, res) => {
//     User.create({
//             username: req.body.username,
//             password: req.body.password
//         })
//         .then(user => {
//             res.send('Berhasil')
//         })
// });

app.post('/users', [
    check('username', 'Name length should be 5 to 20 characters')
    .isLength({ min: 5, max: 20 }),
    check('password', 'Wajib Diisi')
    .notEmpty()
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.json(errors)
    } else {
        User.create({
                username: req.body.title,
                password: req.body.body
            })
            .then(user => {
                res.send('Berhasil')
            })
    }
});

app.listen(4000);