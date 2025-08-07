const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { createPost, getFeed, getPostsByUser } = require('../controllers/postController');

router.post('/', auth, createPost);
router.get('/', getFeed);
router.get('/user/:id', getPostsByUser);

module.exports = router;
