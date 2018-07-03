const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
    name: {type:String, required:true},
    users: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}]
});

module.exports = mongoose.model('Group', groupSchema);
