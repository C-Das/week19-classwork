var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema ({
  _owner:{type: Schema.Types.ObjectId, ref:'User'}
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
