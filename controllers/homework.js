const BigPromise = require("../middleware/Bigpromise");
const Homework = require("../models/homework");
const CustomError = require("../util/customError");
const cloudinary = require("cloudinary");

//lecture adding homework
exports.addHomeworkLecture = BigPromise(async (req, res, next) => {
  console.log(req.body.data)
  const userData = JSON.parse(req.body.data);
  const { title, submissionDate, description ,department,section } = userData;
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
    // lectureId,
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
const {section,department} = req.params;
const Homeworks = await Homework.find({section,department});
res.status(200).json({
  status: true,
  Homeworks,
});
})

// adding homework student by lecture id
exports.addHomeworkstudent = BigPromise(async (req, res, next) => {
  const { submittedDate, isSubmittedWork } = req.body;
  let workfile = await cloudinary.v2.uploader.upload(
    req.files.homeworkFile.tempFilePath,
    {
      folder: "homework",
    }
  );
  const homeworkId = req.params.id;
  const homeworkcontent = await Homework.find({
    homeworkid: homeworkId,
    userId: req.user.id,
  });
  //   if(homeworkcontent){
  //    next( new CustomError("homework is already submitted ",400) )
  //   }
  const homework = await Homework.create({
    homeworkid: homeworkId,
    userId: req.user._id,
    submittedDate,
    isSubmittedWork,
    homeworkFile: { id: workfile.public_id, secure_url: workfile.secure_url },
  });

  res.send({
    success: true,
    homework,
  });
});
