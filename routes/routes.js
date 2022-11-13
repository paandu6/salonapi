const express=require('express')
const router=express.Router()
const postSalonDetails=require('../controllers/salon')

router.route('/').post(postSalonDetails)

module.exports=router