const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth, commentController.addComment);
router.get('/:postID', commentController.getCommentsByPost);

module.exports = router;