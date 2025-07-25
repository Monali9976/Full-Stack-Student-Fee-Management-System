const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, process.env.JWT_SECRET, (err, student) => {
    if (err) return res.sendStatus(403);
    req.student = student;
    next();
  });
}

module.exports = authenticateToken;