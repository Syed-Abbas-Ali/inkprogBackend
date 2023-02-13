const Admin = require("../model/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({_id:id}, process.env.JWT_SECRET);
};

const createAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    let admin = await Admin.findOne({ email: email });

    if (admin) {
      return res.status(500).json({ error: "User already exists." });
    } else {
  
      admin = await Admin.create({
        email,
        password:hashedPassword,
      })
      return res.status(200).json(admin);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Hash the password
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      return res.status(400).json(`Email doesn't exist.`);
    }

    const matchPassword = await bcrypt.compare(password, admin.password);
    if (!matchPassword) {
      return res.status(400).json({ error: `Password doesn't match.` });
    } else {
      // const adminProfile = await Admin.login(email, password);
      const token = createToken(admin._id);
      return res.status(200).json({ admin, token });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createAdmin, loginAdmin };
