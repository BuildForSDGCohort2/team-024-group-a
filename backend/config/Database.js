const mysql = require('mysql');

class Database {

    constructor(){ 
        this.con;
    }

    connect(){
        this.con = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'shdb'
        });
    }

    get pool(){
        if(this.con){
            return this.con;
        }
    }

}


module.exports = new Database();