var cons = {};

cons.DBName = "ChatDB";
cons.UserCollection = "users";
cons.ChatsCollection = "chats";
cons.host = "localhost";
cons.port = 27017;
/**
 * @return {string}
 */
cons.DBUrl = function (dbName) {
    if(dbName == cons.DBName){
        return "mongodb://" + cons.host + ":" + cons.port + "/" + dbName;
    }  
};

module.exports = cons;