const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creating SChema 

const ItemSchema = new Schema({
    
  
    name: {
        type: String,
        maxlength: 50
    },
    admin: false

});

module.exports = Item = mongoose.model('item', ItemSchema);