const authRouter = require('./auth');
const userRouter = require('./user');

module.exports = (app) => {
    app.use('/auth', authRouter);
    app.use('/user', userRouter);
}