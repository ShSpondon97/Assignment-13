const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/config");

/**
 * Optional middleware.
 * Protects a route by requiring a valid token:
 *   Authorization: Bearer <token>
 *
 * Usage:  router.get("/profile", verifyToken, profileController.profile);
 */
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "No token provided",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // make user data available to the controller
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = verifyToken;
