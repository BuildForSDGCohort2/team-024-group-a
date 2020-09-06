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