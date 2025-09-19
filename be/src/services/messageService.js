const { model } = require('mongoose');

const Message = model('messages');

exports.create = (createMessageDto) => {
    const message = new Message(createMessageDto);
    return message.save();
}

exports.read = async (data) => {
    const messages = await Message.find(data);
    if (data.parent == null) {
        const children = await Message.find().in('parent', messages.map(message => message.id));
        return messages.map((message) => {
            const childCount = children.filter(child => child.parent == message.id).length;
            message.childCount = childCount;
            return message;
        });
    }
    return messages;
}

exports.readOne = async (id) => {
    const message = await Message.findById(id);
    if (!message)
        throw new Error('Not found message');
    // const childCount = await Message.find({ parent: id }).count();
    // message.childCount = childCount;
    return message;
}

exports.update = async (userId, id, data) => {
    const message = await Message.findById(id);
    if (!message)
        throw new Error('Not found message');
    if (message.sender != userId)
        throw new Error('User has no permission to update this message');
    await Message.findByIdAndUpdate(id, {
        message:data.message.message,
        isPined: data.isPined
    });
    return this.readOne(id);
}

exports.delete = async (userId, id) => {
    const message = await Message.findById(id);
    if (!message)
        throw new Error('Not found message');
    if (message.sender != userId)
        throw new Error('User has no permission to update this message');
    return Message.findByIdAndDelete(id);
}

exports.emoticon = async (id, createEmoticonDto) => {
    const message = await Message.findById(id);
    const emoticons = message.emoticons;
    let updatedEmoticons;
    if (emoticons.some(emoticon => emoticon.creator == createEmoticonDto.creator && emoticon.code == createEmoticonDto.code)) {
        updatedEmoticons = emoticons.filter((emoticon) => !(emoticon.creator == createEmoticonDto.creator && emoticon.code == createEmoticonDto.code));
    } else {
        updatedEmoticons = [...emoticons, createEmoticonDto];
    }
    await Message.findByIdAndUpdate(id, {
        emoticons: updatedEmoticons,
    });
    return this.readOne(id);
}