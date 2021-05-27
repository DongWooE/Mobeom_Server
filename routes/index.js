const express = require('express');
const router = express.Router();
const clinicRouter = require('./clinic.router');
const userInfo = require('./userInfo.router');

router.use('/clinics', clinicRouter);
router.use('/userInfos', userInfo);

module.exports = router;