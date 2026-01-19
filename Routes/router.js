
const express = require('express');
const router = new express.Router()


const userController = require('../Controllers/userController')
const{ createAnnouncements,getAnnouncements} = require("../Controllers/announceController")







router.post('/user/register',userController.registerUser)
router.post('/user/login',userController.loginUser)
router.get("announcements",getAnnouncements)
router.post("/announcements",createAnnouncements)



 
module.exports = router;