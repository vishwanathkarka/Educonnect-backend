const BigPromise = require("../middleware/Bigpromise");
const ExamResult = require("../models/examResult");
const CustomError = require("../util/customError");

//adding exam marks
exports.addExamMarks = BigPromise(async (req, res) => {
  const { outOfMarks, studentMarks, subject, userId,lectureId } = req.body;
  const addedResult = await ExamResult.create({
    outOfMarks,
    studentMarks,
    subject,
    userId,
    // lectureId,
    percentage:((studentMarks/outOfMarks)*100),

    lectureId: req.user.id,
  });
  res.status(200).json({
    success: true,
    addedResult,
  });
});


//getting exam marks of the specific student
exports.getStudentMarks = BigPromise(async (req, res, next) => {
  const studetMarks = await ExamResult.find({ userId: req.user._id });
  if (!studetMarks) {
    next(new CustomError("Marks is not uploaded", 400));
  }
  res.status(200).json({
    success: true,
    studetMarks,
  });
});
exports.getFailedCount = BigPromise(async(req,res,next)=>{
  const {id}= req.params;
  const failedCount = await ExamResult.find({ userId : id, percentage:{$lt:50}  }).count();
  res.status(200).json({
    success:true,
    failedCount
  })
})

//updating the marks
exports.updateMarks = BigPromise(async (req, res, next) => {
  const updatedMarks = await ExamResult.findOneAndUpdate(
    { _id: req.params.id },
    req.body
  );
  res.status(200).json({
    success: true,
    updatedMarks,
  });
});
