const mongoose=require('mongoose')
// const connectstring='mongodb+srv://paandu:12345@node.pyxjjhw.mongodb.net/salonsetup?retryWrites=true&w=majority'
const connectdb=(url)=>{
    return(
        mongoose.connect(url)
    )}
module.exports=connectdb