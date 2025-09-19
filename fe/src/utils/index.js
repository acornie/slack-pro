export const formatTime = (time) => {
    return new Date(time).toLocaleTimeString();
}

export const formatDate = (date) => {
    const todayString = new Date().toLocaleDateString();
    const dateString = new Date(date).toLocaleDateString();
    if (todayString == dateString)
        return 'Today';
    return dateString;
}