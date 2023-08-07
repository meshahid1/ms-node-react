const Posts = require('../../models/postModel');

class PostRepository {
    async addPost(title){
        try {
            const post = new Posts({
                title
            });
            const savedPost = await post.save();
            return savedPost
        } catch (error) {
            throw error;
        }
    }
    async fetchPostsAndComments(){
        const post = Posts.find();
        return post;
    }
    async FindByIdAndUpdate(post_id, comment){
        const rec = Posts.findById(post_id, (err, post) => {
            if (err) {
              // Handle error
            } else {
              const comnt = post.comments.find((c) => c._id.toString() === comment._id);

              if (comnt) {
                comnt.content = newCommentContent;
                post.save();
              } else {
                // Comment not found
                post.comments.push(comment);
                post.save();
              }
            }
          });
        return rec
    }
}

module.exports = PostRepository