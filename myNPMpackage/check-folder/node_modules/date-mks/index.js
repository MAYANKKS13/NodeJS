function datemks() {
    const currentDate = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return currentDate.toLocaleDateString(undefined, options);
}

module.exports = datemks