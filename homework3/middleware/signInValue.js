const users = require("../Db/users");

const SignInValue = ({body}, res, next) => {
    const emailFind = users.find(item => item.email === body.email);
    const passwordFind = users.find(item => item.password === body.password);
    try {
        if (!passwordFind || !emailFind) {
            throw new Error('Login or password is not provided!');
        }
        if (body.password.length < 6) {
            throw new Error('Not valid password!');
        }
        next()
    } catch (err) {
        console.log(err.message);
        res.status(400).send(err.message);
    }
}

module.exports = SignInValue;