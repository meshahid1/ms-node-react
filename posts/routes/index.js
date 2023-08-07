const express = require('express')
const router = express.Router();
const controller = require('../controllers/postController')

router.post('/post', controller.insertPost);
router.get('/post', controller.getPost);

module.exports = router;