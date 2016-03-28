var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user.js');
var Comment = require('./comment.js');

var ItemSchema = new Schema ({
  _owner:{type: Schema.Types.ObjectId, ref:'User'},
  itemName : String,
  itemDescription :String,
  itemPrice:Number,
  itemSold:Boolean,
  comments: [{
    type: Schema.Types.ObjectId,
    ref:'Comment'
  }]
});

var Item = mongoose.model("Item",ItemSchema);
module.exports = Item;
