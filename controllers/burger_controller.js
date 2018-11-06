//burger_controller.js purpose is to create routes to each the different pages on the localhost server
//and applying the functions from burger.js that is requiring orm.js
//Takes in user commands, sends commands to the model for data updates,
// sends instructions to view to update interface

var express = require("express")
//var app = express();
var burger = require("../model/burger.js")
var router = express.Router();


//replicating solved cat hw example
router.get("/", function (req,res){
    burger.selectAll(function(data){
        var object= {
            burgers: data
        };
        console.log(object);
        res.render("index", object);
    });
});

router.post("/burgers", function(req,res){
    burger.insertOne([
        "burger_name"
    ],
    [
        req.body.burger_name
    ], function(data){
        res.redirect("/");
    });
});

//gets input from user
router.put("/burgers/id:", function (req, res){
    var condition = "id = " + req.params.id;

    burger.updateOne({
        devoured:true
    }, 
    condition, function(data){
        res.redirect("/");
    });
});

module.exports = router;