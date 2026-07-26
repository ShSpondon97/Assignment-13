// GET /
const home = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Express.js API",
  });
};

module.exports = { home };
