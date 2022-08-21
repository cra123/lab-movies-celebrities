//  Add your code here
//Create the celebrity moongose model

var mongoose =  require('mongoose');
var Schema = mongoose.Schema;

var celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
})

//Export the model

module.exports = mongoose.model('Celebrity', celebritySchema);
