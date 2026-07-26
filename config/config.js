require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 5000,

  // Secret used to sign JWT tokens. Keep the real one in .env
  JWT_SECRET: process.env.JWT_SECRET || "my_super_secret_key",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "1h",

  // Demo user (no database in this project)
  DEMO_USER: {
    email: "student@example.com",
    password: "123456",
  },
};
