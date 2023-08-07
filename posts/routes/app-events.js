const PostService = require('../service/postService');

module.exports = (app) => {
    const service = new PostService();
    app.use('/app-events', async (req, res, next) => {
        const {payload} = req.body

        service.SubscribedEvents(payload);
        // console.log("============", payload);
    })
}