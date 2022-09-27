const express = require('express');
const upload = require('../middlewares/upload');

const postController = require('../controllers/postController');
const likeController = require('../controllers/likeController');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.route('/').post(upload.single('image'), postController.createPost);
router.delete('/:id', postController.deletePost);
router.post('/:id/likes', likeController.toggleLike);

router.post('/:id/comments', commentController.createComment);

module.exports = router;
