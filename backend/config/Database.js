const mysql = require('mysql');

class Database {

    constructor(){ 
        this.con;
    }

    connect(){
        this.con = mysql.createPool({
          host: process.env.HOST,
          user: process.env.DB_USER,
          password: process.env.DB_PWD,
          database: process.env.HOST_DB
         });
        return this.con;
    }

    get pool(){
        if(this.con){
            
            return this.con;
        }
        this.connect();
    }

}


module.exports = new Database();