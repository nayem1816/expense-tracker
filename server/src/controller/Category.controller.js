const { getCategoryService } = require("../services/Category.services");

exports.getCategory = async (req, res, next) => {
  try {
    const result = await getCategoryService();

    res.status(200).json({
      status: "success",
      message: "Category get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Category can't get successfully",
      error: error,
    });
  }
};
