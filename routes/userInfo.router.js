const express = require('express');
const router = express.Router();
const {getUserInfo, postUserInfo, createUser} = require('../controllers/userInfo.controller');

router.get('/', createUser);
router.post('/', postUserInfo);
router.get('/:id', getUserInfo);

module.exports = router;