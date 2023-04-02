const mongoose = require('mongoose');
// const uuid = require('uuid')
const Schema = mongoose.Schema;
let Folder = new Schema({
    name: {
        type: String
    },
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
},{
    timestamps: true,
});
module.exports = mongoose.model('Folder', Folder);