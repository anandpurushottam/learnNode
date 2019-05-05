const apiResponse = function(res, statusCode, data) {
    res.status(statusCode).json({
        success: data.success,
        message : data.message,
        data: data.data
    });
}
module.exports = apiResponse