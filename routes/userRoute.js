const express=require("express")
let users=require("../Data")
const router=express.Router()

//get all users
router.get("/getall",(req,res)=>{
    res.send(users)
})

//add new user
router.post("/addUser",(req,res)=>{
    const newUser={
        ...req.body,id:Math.random()
    }
    users.push(newUser)
    res.send({msg:"user added ",users})
})
//edit user
router.put("/edit/:index",(req,res)=>{
    const ind=req.params.index
    const userToEdit=users.find(el=>el.id==ind)
    if (!userToEdit){
        return res.send({msg:"user not found"})
    }
    const editedUser={...userToEdit,...req.body}

users=users.map(el=>el.id==ind?editedUser:el)
res.send({msg:"user edited",users})

})
//delete
router.delete("/delete/:id",(req,res)=>{
    const id=req.params.id
    users=users.filter(el=>el.id!=id)
    res.send({msg:"user deleted",users})
})



module.exports=router