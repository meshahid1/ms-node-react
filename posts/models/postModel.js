const {Schema, model} = require('mongoose');

const postsSchema = new Schema(
    {
        title: String,
        comments: [
            {
                _id: {type: String},
                content: {type: String}
            }
        ],
    },
    {
        timestamps: true
    }
)

const Posts = model('posts', postsSchema)
module.exports = Posts