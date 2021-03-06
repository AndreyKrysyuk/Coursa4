var mongoose    = require('mongoose');
var Schema = mongoose.Schema;

// Schemas
var Post = new Schema({
    username : {
      type : String
    },
    cathegory : {
      type : String,
      required : true
    },
    date : {
      type : Date,
      default : Date.now
    },
    title : {
      type : String,
      required : true,
    },
    description : {
      type : String,
      required : true
    },
    files : [{name : String, path : String}]
});

var PostModel = mongoose.model('posts', Post);

module.exports.PostModel = PostModel;
