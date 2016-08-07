//Connect to the database and export and used by the O.R.M

var mysql = require('mysql');


var source = {
localhost:{
      port: 3306,
      host: 'localhost',
      user: 'root',
      password: 'yankeesny2',
      database: 'burgers_db'
},

jawsDB : {
      port: 3306,
      host: 'gx97kbnhgjzh3efb.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
      user: 'obk9qral5gv9lwys',
      password: 'rxktd5he3n99t5jt',
      database: 'burgers_db'

  }
  
}

var connection = mysql.createConnection( source.jawsDB );

connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
