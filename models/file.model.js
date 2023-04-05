const mongoose = require('mongoose');
// const uuid = require('uuid')
const Schema = mongoose.Schema;
let File = new Schema({
    name: {
        type: String
    },
    folderId: { type: Schema.Types.ObjectId, ref: 'Folder' },
},{
    timestamps: true,
});
module.exports = mongoose.model('File', File);