module.exports = (app) => {
    const User = require('../model/User');
    const response = require('../response');

    app.get('/user', (req, res) => {
        User.findAll()
            .then(user =>{

                const data = {
                    success: true,
                    message: 'sucess',
                    data: user
                }
                response(res, 200, data);
            })
            .catch(err => {
                const data = {
                    success: false,
                    message: 'failed',
                    data: {
                        message:err.name
                    }
                }
                response(res, 500, data);
            });
    })

    app.post('/userAdd', (req, res) => {

        const first_name = req.query.first_name
        const last_name = req.query.last_name
        const email = req.query.email

        User.create({
            'first_name': first_name,
            'last_name': last_name,
            'email': email
        })
            .then(() => res.redirect('./user'))
            .catch(err => res.send(JSON.stringify(err)))

    })
};
