const mongoose=require('mongoose')

const salonSchema=new mongoose.Schema({
    salonType:{
        type:String,
        require:true,
        enum:{
            values:['single','group'],
            message:'{VALUE} is not supported please selected single or group'
        }
    },
    salonName:{
        type:String,
        require:true,
        min:[3,'enter minim 3 characters as name'],
        max:[20,'name should not exceed more than 20 characters']
    },
    salonCompany:{
        type:String,
        require:true,
        min:[3,'enter minim 3 characters as name'],
        max:[20,'name should not exceed more than 20 characters']
    },
    pan:{
        type:String,
        min:[10,'enter correct pan number'],
        max:[11,'enter correct pan number']
    },
    aadhaar:{
        type:Number,
        min:[12,'enter correct addhar number']
        // max:[14,'enter correct aadhar number']
    }
})

module.exports=mongoose.model('salonSetup',salonSchema)