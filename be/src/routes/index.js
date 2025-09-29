const authRouter = require('./auth');
const userRouter = require('./user');
const fileRouter = require('./files')

module.exports = (app) => {
    app.use('/auth', authRouter);
    app.use('/user', userRouter);
    app.use('/file', fileRouter);

}