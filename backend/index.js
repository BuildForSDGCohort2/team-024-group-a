const cluster = require('cluster')
const os = require('os');
require('dotenv').config({path: __dirname + '/.env'});
const {promisify} = require('util');


if(cluster.isMaster){
    
     console.log(`Master ${process.pid} is running`);

     for(let i = 0; i < os.cpus().length; i++){
          const  worker = cluster.fork();
          worker.on('exit', (code, signal)=>{
            if (signal) {
                console.log(`Signal ${signal} killed worker`);
              } else if (code !== 0) {
                console.log(`worker error with code: ${code}`);
              } else {
                console.log('worker success!');
              }
          })    
     }

     cluster.on('exit', (worker, code, signal) => {
          console.log(`worker ${worker.process.pid} died`);
     });

}else{
    require('./server');
}