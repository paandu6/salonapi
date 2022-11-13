const express=require('express')
const router=express.Router()
const postSalonDetails=require('../controllers/salon')

router.route('/').post(postSalonDetails)
router.route('/').get((req,res)=>{
    res.send('<h1>get sealon</h1>')
})
module.exports=router