//burger.js purpose is calling the functions from orm.js and showing where and what is being updated 
//and returning results
//Structures your data in a reliable form and prepares it based on controller’s instructions

var orm = require("../config/orm.js")

//burger object
//and running the actual functions with values
var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function(colName, value, cb) {
        orm.insertOne("burgers", colName, value, function (res){
            cb(res);
        })
    }, 
    updateOne: function(colValue, condition, cb){
        orm.updateOne("burgers", colValue, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burger;