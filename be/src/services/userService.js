const { model } = require('mongoose');

const User = model('users');

exports.create = (createUserDto) => {
    const user = new User(createUserDto);
    return user.save();
}

exports.read = () => {
    return User.find();
}

exports.readOne = async (id) => {
    const user = await User.findById(id);
    if (!user)
        throw new Error('Not found user');
    return user;
}

exports.update = (id, updateUserDto) => {
    console.log(updateUserDto)
    return User.findByIdAndUpdate(id, updateUserDto);
}

exports.delete = (id) => {
    return User.findByIdAndDelete(id);
}
