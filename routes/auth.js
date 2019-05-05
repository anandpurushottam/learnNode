module.exports = (app) => {
    const authController = require('../controller/auth.controller');
  

    app.post('/signup', authController.signup)

    app.post('/login', (req, res) => {

    })

    app.get('/forgotpassword', (req, res) => {

    })

};

