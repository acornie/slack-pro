exports.sendToUsers = (socketList, userIds, message, status, data) => {
    userIds.forEach(userId => {
        socketList[String(userId)]?.forEach(socket => socket.emit(message, status, data));
    })
}