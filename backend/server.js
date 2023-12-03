const express=require('express')
const connection=require("./db")
const userRouter=require("./routes/users")
const authRouter=require("./routes/auth")
const postRouter=require("./routes/posts")
const profileRouter=require("./routes/profile")
const app=express()

app.use(express.json({extended:false}))

app.get("/",(req,res)=>res.send('API running'))
const PORT=process.env.PORT || 5000

//Define Routes
app.use("/users",userRouter)
app.use("/auth",authRouter)
app.use("/post",postRouter)
app.use("/profile",profileRouter)

app.listen(PORT,async()=>{
try{
    await connection;
    console.log("connected to db")
}catch(err){
    console.log({"msg":"not connected to database","error":err.message})
}
 console.log(`Server started on port ${PORT}`)
})