var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  username : String,
  password:String, //has created from password
  created_at:{type: Date, default:Date.now}
});

var postSchema = new mongoose.Schema ({
  text : String,
  username : String,
  created_at:{type: Date, default:Date.now}
});

var User = mongoose.model("User",userSchema);
var Post = mongoose.model("Post",postSchema);
module.exports = User;
module.exports = Post;
