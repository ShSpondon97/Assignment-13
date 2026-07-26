// GET /about
const about = (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is the About API",
  });
};

module.exports = { about };
