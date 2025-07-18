const Student = require('../models/studentModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const student = await Student.create({ name, email, password: hashedPassword });
    const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET);
    res.json({ token });
  } catch (err) {
    res.status(400).json({ message: 'User already exists or invalid data' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const student = await Student.findOne({ email });
  if (!student || !(await bcrypt.compare(password, student.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: student._id }, process.env.JWT_SECRET);
  res.json({ token });
};

exports.getAllStudents = async (req, res) => {
  const students = await Student.find({}, '-password');
  res.json(students);
};

exports.getProfile = async (req, res) => {
  const student = await Student.findById(req.student.id, '-password');
  res.json(student);
};

exports.updateProfile = async (req, res) => {
  const { name, email } = req.body;
  const student = await Student.findByIdAndUpdate(req.student.id, { name, email }, { new: true });
  res.json(student);
};

exports.payFees = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.student.id, { feesPaid: true }, { new: true });
  res.json({ message: 'Payment successful', student });
};