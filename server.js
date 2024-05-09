const express=require("express")

const app=express()
const Datee=require("./middleware/Date")
app.use(express.json())
app.use(Datee)
/*
app.get("/",(req,res)=>{
    res.send("home page")
})


app.get("/about",(req,res)=>{
    res.sendFile(__dirname + "/public/about.html")
})

console.log(__dirname,"helloo azizzzzzzzz")
*/

app.use("/api/users",require("./routes/userRoute"))
//port
const port=5001

app.listen(port,err=>{
 err?console.log(err):console.log(`server is running on port ${port}`)   
})