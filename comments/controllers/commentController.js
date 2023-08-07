const CommentService = require('../service/commentService');
const {randomBytes} = require('crypto');
const { default: axios } = require('axios');

const commentsByPostId = {}
const service = new CommentService();
module.exports.insertComment =  async (req, res) => {
    try {
        const {content} = req.body;
        if (!content ||!req.params.post_id ) return res.status(400).json
        const savedata = await service.insertComment(content, req.params.post_id)
        await axios.post('http://localhost:8080/app-events', {
            payload: {
                event: 'ADD_COMMENT',
                data:{
                    post_id: req.params.post_id,
                    comment: savedata
                }
            }
        })
        res.json(savedata);
    } catch (error) {
        throw error;
    }
}

module.exports.getComment = async (req, res) => {
   try {
    res.status(201).send(commentsByPostId[req.params.id]);
   } catch (error) {
    
   }
}