const asyncHandler = require('express-async-handler');

exports.content_create_post = asyncHandler(async (req, res, next) => {
  res.render('index', { title: 'Express', article: req.body.article });
});
