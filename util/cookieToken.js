const mongoose = require("mongoose")
const  cookieToken = async (user,res)=> {
   const token = await user.getJwtToken()
   const option = {
    expires:new Date(
        Date.now() + 2 *24* 60*60*1000
    ),
    httpOnly:true
   
}
user.password = undefined
res.status(200).cookie("token",token,option).json({
    status:true,
    token,
    user
})

 
}
module.exports = cookieToken
