// GET /services
const services = (req, res) => {
  res.status(200).json({
    success: true,
    services: ["Web Development", "Mobile App Development", "UI/UX Design"],
  });
};

module.exports = { services };
