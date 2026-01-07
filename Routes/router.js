
const express = require('express');
const router = new express.Router()


const userController = require('../Controllers/userController')
const announceController = require("../Controllers/announceController")







router.post('/user/register',userController.registerUser)
router.post('/user/login',userController.loginUser)
router.get("/announcements",announceController.getAnnouncements)
router.post("/announcements",announceController.createAnnouncements)



 
module.exports = router;