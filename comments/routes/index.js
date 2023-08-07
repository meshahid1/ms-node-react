const express = require('express')
const router = express.Router();
const controller = require('../controllers/commentController')

router.post('/comment/:post_id', controller.insertComment);
router.get('/comment:post_id', controller.getComment);

module.exports = router;