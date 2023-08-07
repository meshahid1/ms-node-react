const { CommentRepository } = require('../database/index');

class CommentService {
    constructor() {
        this.repository = new CommentRepository();
    }

    async insertComment(content, post_id) {
        return  this.repository.addComment(content, post_id)
    }
    async SubscribedEvents(payload) {
        const { event, data } = payload
        const {postId , comment } = data
        
        switch (event) {
            case 'ADD_COMMENT':
                this.insertComments(postId, comment)
                break;
            case 'TEST_EVENT':
                console.log('reached hereeeeee');
                break;
            default:
                break;
        }
    }
} 
module.exports = CommentService