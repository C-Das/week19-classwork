var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name : String,
  password:String,
  money:Number,
  collectedItems:[String]
});

var TestUser = mongoose.model("TestUser",userSchema);
module.exports = TestUser;
