const { PostRepository } = require('../database/index');

class PostService {
    constructor() {
        this.repository = new PostRepository();
    }

    async insertPost(title) {
        return await this.repository.addPost(title)
    }
    async insertComments(post_id, comment) {
        try {
            console.log('..................', post_id);
            const response = await this.repository.FindByIdAndUpdate(post_id, comment);
            return response;
        } catch (error) {
            return error
        }
    }
    async fetchAllRecords(){
        return this.repository.fetchPostsAndComments()
    }

    async SubscribedEvents(payload) {
        const { event, data } = payload
        const {post_id , comment } = data
        
        switch (event) {
            case 'ADD_COMMENT':
                this.insertComments(post_id, comment)
                break;
            case 'TEST_EVENT':
                console.log('reached hereeeeee');
                break;
            default:
                break;
        }
    }
} 
module.exports = PostService