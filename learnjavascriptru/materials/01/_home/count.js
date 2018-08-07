let i = 0;

module.exports = (req, res) => {
    debugger;
    i += 10;
    res.end(i.toString()); // (!!! toString) Buffer
}