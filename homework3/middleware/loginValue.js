function LoginValue(req, res, next) {
    try {
        const {firstName, lastName, email, password, age, city} = req.body;
        if (!firstName) {
            throw new Error('FirstName not is valid!');
        }
        if (!lastName) {
            throw new Error('LastName not is valid!');
        }
        if (!email) {
            throw new Error('Email not is valid!');
        }
        if (password.length < 6) {
            throw new Error('Password not is valid!');
        }
        if (!age) {
            throw new Error('Age not is valid!');
        }
        if (!city) {
            throw new Error('City not is valid!');
        }
        next();
    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = LoginValue;