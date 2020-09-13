const cluster = require("cluster");
const os = require("os");
require("dotenv").config({path: __dirname + "/.env"});



if(cluster.isMaster){

     for(let i = 0; i < os.cpus().length; i++){
          cluster.fork();
     }

}else{
    require("./server");
}


