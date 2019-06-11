/* this is config file for our application */

module.exports = {
    jsonWebTokenKey : 'weAreShreenathji',
    /* this mysql database config 
       you can also opt for env variables  
    */
    mysql : {
        host: 'localhost',
        user : 'root',
        password: '',
        database : 'mysql_database',
        connectionLimit: 10
    },
    mongoDB : {
        host : 'localhost',
        // host:'159.89.162.38',
        database : 'shreenathji'
    },
    /* do not change this salrounds value */
    bycryptSalt : 13
};