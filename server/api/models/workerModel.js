const mongoose = require("mongoose");

const workerSchema = mongoose.Schema(
    {
        subjectName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        number: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },


    },
    {
        timestamp: true,
    }
);

module.exports = mongoose.model("Worker", workerSchema)
