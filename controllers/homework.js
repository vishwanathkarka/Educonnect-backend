const BigPromise = require("../middleware/Bigpromise");
const Homework = require("../models/homework");
const CustomError = require("../util/customError");
const cloudinary = require("cloudinary");

//lecture adding homework
exports.addHomeworkLecture = BigPromise(async (req, res, next) => {
  console.log(req.body.data)
  const userData = JSON.parse(req.body.data);
  const { title, submissionDate, description ,department,section, lectureId } = userData;
  let workfile = await cloudinary.v2.uploader.upload(
    req.files.lectureworkFile.tempFilePath,
    {
      folder: "homework",
    }
  );
  // let lectureId = req.user._id;
  const homework = await Homework.create({
    title,
    submissionDate,
    lectureId,
    description,
    department,
    section,
    lectureworkFile: {
      id: workfile.public_id,
      secure_url: workfile.secure_url,
    },
  });
  res.status(200).json({
    status: true,
    homework,
  });
});

// list the homework based on the section and department
exports.getHomeWorks = BigPromise(async (req, res, next) => {
const {section,department}  = req.params;
const Homeworks = await Homework.find({section,department}).populate("lectureId").exec();
res.status(200).json({
  status: true,
  Homeworks,
});
})

exports.homeworkSubmittedCount = BigPromise(async (req, res, next) => {
const {id} = req.params
const count = await Homework.find({userId:id}).count();
res.status(200).json({
  success:true,
  count
})
})

exports.homeworkAddedLecturer = BigPromise(async (req, res, next) => {
  const {id} = req.params
  const count = await Homework.find({lectureId:id}).count();
  res.status(200).json({
    success:true,
    count
  })
  })

// adding homework student by lecture id
exports.addHomeworkstudent = BigPromise(async (req, res, next) => {
  const userData = JSON.parse(req.body.data);
  const { submittedDate, userId, isSubmittedWork } = userData
  let workfile = await cloudinary.v2.uploader.upload(
    req.files.homeworkFile.tempFilePath,
    {
      folder: "homework",
    }
  );
  const homeworkId = req.params.id;
  // const homeworkcontent = await Homework.findOne({
  //   _id: homeworkId,
  //   userId: req.user.id,
  // });
  //   if(homeworkcontent){
  //     throw new CustomError("homework is already submitted ",400) 
  //   }
  const homework = await Homework.findOne({_id:req.params.id})
  console.log(homework)
  homework.submittedDate=Date.now()
  homework.isSubmittedWork = true
  homework.homeworkFile = { id: workfile.public_id, secure_url: workfile.secure_url }
  homework.save()
  // const homework = await Homework.create({
  //   homeworkid: homeworkId,
  //   userId: req.user.id,
  //   submittedDate:Date.now(),
  //   "isSubmittedWork":true, 
  //   homeworkFile: { id: workfile.public_id, secure_url: workfile.secure_url },
  // });

  res.status(200).json({
    success: true,
    homework,
  });
});


exports.findHomestudent  = BigPromise(async (req, res, next) => {
const {userId,homeworkid} = req.params
const homeworkres = await Homework.findOne({$and: [{"userId":userId},{"homeworkid":homeworkid}]})
res.status(200).json({
  success:true,
homeworkres
})
})

exports.getLecturerAddedHomeWork = BigPromise(async(req,res,next)=>{
  const id = req.user._id
  const homeWork = await Homework.find({lectureId:id})
  res.status(200).json({
    success:true,
    homeWork
  })
})