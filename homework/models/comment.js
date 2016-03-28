var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema ({
  _owner:{type: Schema.Types.ObjectId, ref:'User'}
  itemLink : String,
  CommentMessage :String,
});

var Comment = mongoose.model("Item",CommentSchema);
module.exports = Comment;
