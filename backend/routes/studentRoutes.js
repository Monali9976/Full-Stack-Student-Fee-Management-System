const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');
const studentController = require('../controllers/studentController');

router.post('/auth/signup', studentController.signup);
router.post('/auth/login', studentController.login);
router.get('/students/all', studentController.getAllStudents);
router.get('/students/profile', authenticateToken, studentController.getProfile);
router.put('/students/profile', authenticateToken, studentController.updateProfile);
router.put('/students/pay', authenticateToken, studentController.payFees);

module.exports = router;