const salonSetup=require('../modal/salonsetup')
const productAdd=require('../modal/salonsetup')

const postSalonDetails= async (req,res)=>{
    try {
        const setup=await salonSetup.create(req.body)
        res.status(200).json( setup )
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}

const postProductDetails=async (req,res)=>{
    try {
        const addProducts= await productAdd.create(req.body)
        res.status(200).json( addProducts )
    } catch (error) {
        res.status(500).json({msg : error})
    }
}
const editProductDetails=async (req,res)=>{
    try {
        const _id=req.params.id
        const editproduct=await productAdd.findByIdAndUpdate(_id, req.body,{
            new:true
        })
        res.status(200).json( editproduct )
    } catch (error) {
        res.status(500).json({msg : error})
    }
}

module.exports=postSalonDetails
module.exports=postProductDetails
module.exports=editProductDetails