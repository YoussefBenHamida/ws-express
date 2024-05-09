const date=new Date()
const Datee=(req,res,next)=>{

    const h=date.getHours()
    const d=date.getDay()
    if(!(d>=1 && d<=5 && h >=7 && h<=17)){
        return res.send("page not found !")
    }
 next()
}

module.exports=Datee