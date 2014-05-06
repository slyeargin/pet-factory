'use strict';

var Mongo = require('mongodb');

exports.index = (req, res)=>{
  var pets = global.nss.db.collection('pets');
  pets.find().toArray((err, records)=>{
    console.log(records);
    res.render('pets/index', {pets: records, bg: 'index.jpg', title: 'Our Handcrafted, Artisanal Pets'});
  });
};

exports.show = (req, res)=>{
  var pets = global.nss.db.collection('pets');
  var _id = Mongo.ObjectID(req.params.id);
  pets.findOne({_id: _id}, (err, record)=>{
    res.render('pets/show', {pet: record, bg: 'index.jpg', title: 'Pet Factory: ' + record.name});
  });
};

exports.new = (req, res)=>{
  res.render('pets/new', {bg: 'index.jpg', title: 'Custom Order Your Pet'});
};

exports.create = (req, res)=>{
  var photo;

  switch(req.body.species){
  case 'Dog':
    photo = 'yourdog.jpg';
    break;
  case 'Cat':
    photo = 'yourcat.jpg';
    break;
  case 'Sloth':
    photo = 'yoursloth.jpg';
    break;
  }
  req.body.photo = photo;
  var pets = global.nss.db.collection('pets');
  pets.save(req.body, (err, obj)=>{
    res.redirect('/pets/'+ obj._id);
  });
};

exports.destroy = (req, res)=>{
  var pets = global.nss.db.collection('pets');
  var _id = Mongo.ObjectID(req.params.id);
  pets.findAndRemove({_id:_id}, (err, record)=>{
    res.redirect('/pets');
  });
};
