const cluster = require("cluster");
const os = require("os");
require("dotenv").config({path: __dirname + "/.env"});


//will be removed from here but for now let it be
process.env.SECRET_KEY = "df431efd1ec7484da96a3c327f86881559a7cf55bbd4b6744054abcec76ksbdki";

if(cluster.isMaster){

     for(let i = 0; i < os.cpus().length; i++){
          cluster.fork();
     }

}else{
    require("./server");
}


