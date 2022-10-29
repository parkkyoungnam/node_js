/*
import cluster from 'cluster'

var Cluster = require("cluster");


Cluster.schedualingPolicy = Cluster.SCHED_RR;

if(Cluster.isMster == true)
{
    Cluster.fork();
    Cluster.fork();

    Cluster.on('online', function(worker)
    {
        for(var i = 0; i< 10; i++)
        {
            console.log(worker.process.pid, "동작");
        }
    });
}

*/

// 안되는 이유 찾아보기
