const express=require('express')
const router=express.Router()
const postSalonDetails=require('../controllers/salon')
const postProductDetails=require('../controllers/salon')
const editProductDetails=require('../controllers/salon')
router.route('/').post(postSalonDetails)
router.route('/addproduct').post(postProductDetails)
router.route('/addproduct/:id').patch(editProductDetails)

module.exports=router