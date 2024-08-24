var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mayanksql",
  database: "mydb"
});

con.connect(function(err) {
    if(err) throw err;

    var sql = "SELECT * FROM customers WHERE address LIKE '%an%'";

    // var values = [
    //     ['Mayank','Dhanbad',2],
    //     ['Ashish','Patna',3]
    //     ['Gourav','Bokaro',4],
    //     ['Bishal','Jamshedpur',5],
    //     ['Abhishek','Ranchi',6],
    //     ['Adarsh','Patna',7]
    //     ['Gourav','Bokaro']

    // ]
    con.query(sql,function(err, result, fields) {
          if(err) throw err;

        console.log(result);
         
          
    });
});
