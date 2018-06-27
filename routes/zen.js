var express = require('express');
var router = express.Router();
var db = require("../models");
var helpers = require("../helpers/zen");

router.route('/')
 .get(helpers.getZens)
 .post(helpers.createZen)
 
// show register form
router.get("/random", function(req, res){
   
    db.Zen.find()
    .then(function(data){
        if(data.length==0)
        res.send("Sometimes the world is evil enough to delete all the quotes!");
        else{
            var randomObj = data[Math.floor(Math.random()*data.length)];
            res.send(randomObj.quote);
        }
        
    })
    .catch(function(err)
    {
        console.log("Inside Random Quote route: " + err);
    })

});

router.route('/:zenId')
  .get(helpers.getZen)
  .put(helpers.updateZen)
  .delete(helpers.deleteZen)
  

  
module.exports = router;