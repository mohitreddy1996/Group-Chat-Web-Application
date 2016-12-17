var mongoClient = require("./mongoClient");
var cons = require("./constants");

var mongoHelper = {};

mongoHelper.addUser = function (dbName, collName, userName, userId, userPassword, callback) {
    var mongoObj = {};
    mongoObj._id = userId;
    mongoObj.userId = userId;
    mongoObj.userName = userName;
    mongoObj.userPasswrd = userPassword;
    mongoClient.insertInDB(dbName, collName, mongoObj, callback);
};

mongoHelper.findUser = function (dbName, collName, userId, callback) {
    var mongoObj = {};
    mongoObj.userId = userId;
    mongoClient.findInDB(dbName, collName, mongoObj, 0, 100, callback);
};

module.exports = mongoHelper;