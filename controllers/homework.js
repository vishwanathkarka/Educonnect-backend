const BigPromise = require("../middleware/Bigpromise");
const Homework = require("../models/homework");
const CustomError = require("../util/customError");
const cloudinary = require("cloudinary");

//lecture adding homework
exports.addHomeworkLecture = BigPromise(async (req, res, next) => {
  const { title, submissionDate } = req.body;
  let workfile = await cloudinary.v2.uploader.upload(
    req.files.lectureworkFile.tempFilePath,
    {
      folder: "homework",
    }
  );
  let lectureId = req.user._id;
  const homework = await Homework.create({
    title,
    submissionDate,
    lectureId,
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
