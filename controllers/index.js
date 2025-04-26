//get name function
const getName = (req, res, next) => {
    res.send('Camden Asay');
};

//get other name function
const getOtherName = (req, res, next) => {
    res.send('Nathan Asay');
};

module.exports = { getName,getOtherName };