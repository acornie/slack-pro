const { model } = require('mongoose');

const Channel = model('channels');

exports.create = (createChannelDto) => {
    if (!createChannelDto.members.some(member => member == createChannelDto.creator)) {
        createChannelDto.members = [...createChannelDto.members, createChannelDto.creator];
    }
    if (createChannelDto.members.length < 2)
        throw new Error('Please select more than two members');
    const channel = new Channel(createChannelDto);
    return channel.save();
}

exports.read = (userId) => {
    return Channel.find({ members: { $in: [userId] } }).populate('members');
}

exports.readOne = async (id) => {
    const channel = await Channel.findById(id);
    if (!channel)
        throw new Error('Not found channel');
    return channel;
}

exports.update = async (userId, id, updateChannelDto) => {
    const channel = await Channel.findById(id);
    if (channel.creator != userId)
        throw new Error('User has no permission to update this channel');
    if (!channel)
        throw new Error('Not found channel');
    await Channel.findByIdAndUpdate(id, updateChannelDto);
    return this.readOne(id);
}

exports.delete = async (userId, id) => {
    const channel = await Channel.findById(id);
    if (channel.creator != userId)
        throw new Error('User has no permission to update this channel');
    if (!channel)
        throw new Error('Not found channel');
    return Channel.findByIdAndDelete(id);
}
