const Comment = require('../../models/commentModel');

class CommentRepository {
    async addComment(content, post_id){
        console.log('///////////', post_id)
        try {
            const comment = new Comment({
                content,
                post_id
            });
            const savedcomment = await comment.save();
            return savedcomment
        } catch (error) {
            throw error;
        }
    }
}

module.exports = CommentRepository