// GET /contact
const contact = (req, res) => {
  res.status(200).json({
    success: true,
    email: "support@example.com",
    phone: "+8801700000000",
  });
};

module.exports = { contact };
