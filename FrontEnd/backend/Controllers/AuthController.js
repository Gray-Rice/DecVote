const UserModel = require("../Models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("Signup request received:", email);  // Debugging
  
      const user = await UserModel.findOne({ email });
      if (user) {
        return res.status(409).json({
          message: 'User already exists, please log in',
          success: false
        });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("Password hashed successfully:", hashedPassword);  // Debugging
  
      const newUser = new UserModel({
        email,
        password: hashedPassword
      });
  
      await newUser.save();
      console.log("User saved successfully:", newUser);  // Debugging
  
      res.status(201).json({
        message: "Sign Up Successful",
        success: true
      });
    } catch (error) {
      console.error('Signup Error:', error);  // Detailed error log
      res.status(500).json({
        message: "Internal Server Error",
        success: false
      });
    }
  };
  

  const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log("Login request received:", email);  // Debugging
  
      const user = await UserModel.findOne({ email });
      if (!user) {
        return res.status(401).json({
          message: 'User does not exist, please sign up',
          success: false
        });
      }
  
      const isEqual = await bcrypt.compare(password, user.password);
      console.log("Password comparison result:", isEqual);  // Debugging
  
      if (!isEqual) {
        return res.status(401).json({
          message: "Incorrect password",
          success: false
        });
      }
  
      const jwtToken = jwt.sign(
        { email: user.email, id: user._id },
        "pass123", // Use process.env.JWT_SECRET in production
        { expiresIn: '24h' }
      );
  
      console.log("JWT token generated:", jwtToken);  // Debugging
  
      res.status(200).json({
        message: "Login Success",
        success: true,
        jwtToken,
        email
      });
    } catch (error) {
      console.error('Login Error:', error);  // Detailed error log
      res.status(500).json({
        message: "Internal Server Error",
        success: false
      });
    }
  };
  

module.exports = { signup, login };