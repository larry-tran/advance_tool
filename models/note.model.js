const mongoose = require('mongoose');
// const uuid = require('uuid')
const Schema = mongoose.Schema;
let Note = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    },
    folder: [{ type: Schema.Types.ObjectId, ref: 'Folder' }],
},{
    timestamps: true,
});
module.exports = mongoose.model('Note', Note);