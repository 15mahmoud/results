const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiErrors");
const Result=require('../model/resultsModel')


exports.getResult = asyncHandler(async (req, res, next) => {
  const {id} = req.params;
  const result = await Result.findById(id);
  if (!result) {
    return next(new ApiError(`No product for this id ${id}`, 404));
  }
  res.status(200).json({ data: result });
});



