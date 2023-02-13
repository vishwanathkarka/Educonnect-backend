const express = require("express")
const app = express()
const userRoute = require("./routers/user")
const leaveRoute = require("./routers/leave")
const fileUpload = require("express-fileupload")
const cookieParser = require("cookie-parser")

app.set("view engine", "ejs");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));
app.use(cookieParser())
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("hello")
})
app.get("/signuptest", function (req, res) {
    res.render("signuptest");
  });

//api route
app.use("/api/v1",userRoute)
app.use("/api/v1",leaveRoute) 
module.exports = app;
