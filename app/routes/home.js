'use strict';

exports.index = (req, res)=>{
  res.render('home/index', {bg: 'index.jpg', title: 'Welcome to the Pet Factory'});
};

exports.about = (req, res)=>{
  res.render('home/about', {bg: 'about.jpg', title: 'About the Pet Factory'});
};

exports.contact = (req, res)=>{
  res.render('home/contact', {bg: 'contact.jpg', title: 'Contact the Pet Factory'});
};
