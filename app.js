const express = require("express")
const app = express()
const fileUpload = require("express-fileupload")
const cookieParser = require("cookie-parser")


const userRoute = require("./routers/user")
const leaveRoute = require("./routers/leave")
const attendanceRoute = require("./routers/attendance")
const timeTable = require("./routers/timetable")
const sittingArrangement = require("./routers/sittingArranagment")
const homework =require("./routers/homework")
const payment = require("./routers/payment")
const examResult = require("./routers/examResult")
const department = require("./routers/department")
const section = require("./routers/section")
var cors = require('cors')

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true}));

app.use(express.json());
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
app.use("/api/v1",attendanceRoute) 
app.use("/api/v1",homework) 
app.use("/api/v1",sittingArrangement) 
app.use("/api/v1",timeTable) 
app.use("/api/v1",payment) 
app.use("/api/v1",examResult) 
app.use("/api/v1",department) 
app.use("/api/v1",section) 

module.exports = app;
