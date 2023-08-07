const PostService = require('../service/postService');
const {randomBytes} = require('crypto')

const posts = {}
const service = new PostService();
module.exports.insertPost =  async (req, res) => {
    
    try {
        console.log(req.body);
        const {title} = req.body;
        const data = await service.insertPost(title)

        res.json(data);
        
    } catch (error) {
        throw error;
    }
}

module.exports.getPost = async (req, res) => {
   try {
    const data = await service.fetchAllRecords();
    res.json(data)

   } catch (error) {
    
   }
}