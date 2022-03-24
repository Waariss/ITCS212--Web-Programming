const mysql = require('mysql2');
var connection = mysql.createConnection({
 host : process.env.MYSQL_HOST,
 user : process.env.MYSQL_USERNAME,
 password : process.env.MYSQL_PASSWORD,
 database : process.env.MYSQL_DATABASE
});
/* Connect to DB */
connection.connect(function(err){
 if(err) throw err;
 console.log("Connected DB: "+process.env.MYSQL_DATABASE);
});
app.listen(process.env.PORT, function(){
    console.log("Server listening at Port 8080");
});