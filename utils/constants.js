var cons = {};

cons.DBName = "ChatDB";
cons.UserCollection = "users";
cons.ChatsCollection = "chats";
cons.host = "localhost";
cons.port = 27017;

cons.DBUrl = function (dbName) {

    return ("mongodb://" + cons.host + ":" + cons.port + "/" + dbName);

};

module.exports = cons;