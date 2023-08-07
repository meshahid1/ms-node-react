const {Schema, model} = require('mongoose');

const CommentsSchema = new Schema(
    {
        content: String,
        post_id: String,
    },
    {
        timestamps: true
    }
)

const Comments = model('Comments', CommentsSchema)
module.exports = Comments