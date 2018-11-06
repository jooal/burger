//orm.js purpose is creating the functions that will modify info in sql database 

var connection = require ("./connection.js");

function printQuestionMarks(num) {
    var arr=[];

    for (var i =0; i<num; i ++) {
        arr.push("?");
    }
    return arr.toString();
}

//sending object data to sql 
function objToSql(ob) {
    var arr=[];

    for (var key in ob) {
          arr.push(key + "=" + ob[key]);
        }
      

return arr.toString();
}

//creating functions to be used by controller on database 
var orm = {
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM " + tableName + ";"; 
        connection.query(queryString, function(err, res){
            if (err) throw err;
            cb(res)
        });
    },
    insertOne: function (tableName, colName, value, cb) {
        var queryString = "INSERT INTO " + tableName; //do you need to define tablename? can you jst use "burgers"??? 

        queryString +=" (";
        queryString += colName.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(value.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, value, function(err, res){
            if (err) throw err;
            cb(res);
        });
    }, 
    updateOne: function (tableName, colValue, condition, cb) {
        var queryString = "UPDATE " + tableName;

        queryString += " SET ";
        queryString += objToSql(colValue);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, res){
            if (err) throw err;
            cb(res);
        });
    }
};


module.exports = orm;