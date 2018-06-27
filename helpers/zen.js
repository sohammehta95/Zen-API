var db = require('../models');

exports.getZens = function(req, res){
    db.Zen.find()
    .then(function(zens){
        res.json(zens);
    })
    .catch(function(err){
        res.send(err);
    })
}

exports.createZen = function(req, res){
  db.Zen.create(req.body)
  .then(function(newZen){
      res.status(201).json(newZen);
  })
  .catch(function(err){
      res.send(err);
  })
}

exports.getZen = function(req, res){
   db.Zen.findById(req.params.zenId)
   .then(function(foundZen){
       res.json(foundZen);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.updateZen =  function(req, res){
   db.Zen.findOneAndUpdate({_id: req.params.zenId}, req.body, {new: true})
   .then(function(zen){
       res.json(zen);
   })
   .catch(function(err){
       res.send(err);
   })
}

exports.deleteZen = function(req, res){
   db.Zen.remove({_id: req.params.zenId}) 
   .then(function(){
       res.json({message: 'We deleted it!'});
   })
   .catch(function(err){
       res.send(err);
   })
}

module.exports = exports;