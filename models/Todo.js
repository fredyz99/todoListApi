const mongoose = require("mongoose");

var Schema = mongoose.Schema;

const todoSchema = new Schema({
    kegiatan:{
        type: String,
    },
    status: {
        type: Boolean,
    },
});

const Todo = mongoose.models('Todo', todoSchem,"todos");

module.exports= Todo;