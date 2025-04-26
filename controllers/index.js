//get name function
const getName = (req, res, next) => {
    res.send('Nathan Asay');
};

//get other name function
const getOtherName = (req, res, next) => {
    res.send('Camden Asay');
};

module.exports = { getName,getOtherName };