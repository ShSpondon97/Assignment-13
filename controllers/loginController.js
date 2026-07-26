const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRES_IN, DEMO_USER } = require("../config/config");

// POST /login
const login = (req, res) => {
  const { email, password } = req.body || {};

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and Password are required",
    });
  }

  // Check credentials against the demo user
  if (email !== DEMO_USER.email || password !== DEMO_USER.password) {
    return res.status(401).json({
      success: false,
      message: "Invalid Email or Password",
    });
  }

  // Credentials are correct -> generate JWT
  const token = jwt.sign(
    { email: DEMO_USER.email, role: "student" },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );

  return res.status(200).json({
    success: true,
    message: "Login Successful",
    token: token,
  });
};

module.exports = { login };
