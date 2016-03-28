var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/yard-sale");

var User = require('./models/user.js');
var Comment = require('./models/comment.js');
var item = require('./models/item.js');

//create a user
var user1 = new User({
  name :'Aperture Science',
  money: 500000,
  password:'BlackMesa'
  collectedItems:['Jade Sword','Magic Beans']
});

  user1.save(function(err){
    if(err) return(err);

  var comment1 = new Comment({
    commentMessage:"Test comment 1 ",
    itemLink:"Portal Gun"
    _owner:user1.id
  });

  var comment2 = new Comment({
    commentMessage:"Test comment 2",
    itemLink:"Portal Gun"
    _owner:user1.id
  });

  comment1.save(function(err){
    if(err) reqturn(err);
  });

  comment2.save(function(err){
    if(err) reqturn(err);
  });

})

