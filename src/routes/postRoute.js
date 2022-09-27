const express = require('express');
const upload = require('../middlewares/upload');

const postController = require('../controllers/postController');
const likeController = require('../controllers/likeController');

const router = express.Router();

router.route('/').post(upload.single('image'), postController.createPost);

router.post('/:id/likes', likeController.toggleLike);

module.exports = router;
