var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user.js');

var CommentSchema = new Schema ({
  _owner:{type: Schema.Types.ObjectId, ref:'User'},
  itemLink : String,
  CommentMessage :String,
});

var Comment = mongoose.model("Comment",CommentSchema);
module.exports = Comment;
