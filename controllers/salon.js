const salonSetup=require('../modal/salonsetup')

// const getSalonDetails= async (req,res)=>{
//     res.send('<h1>all set server started</h1>')
// }
const postSalonDetails= async (req,res)=>{
    try {
        const setup=await salonSetup.create(req.body)
        res.status(200).json( setup )
    } catch (error) {
        res.status(500).json({msg:error})
    }
    
}

module.exports=postSalonDetails