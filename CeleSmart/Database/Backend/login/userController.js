const User = require('./userModel');

exports.loginUser = (req, res) => {
  const { name, phoneNumber } = req.body;

  // Validate the inputs (you can add more validation logic here)

  const newUser = new User({ name, phoneNumber });

  newUser.save((err, user) => {
    if (err) {
      return res.status(400).json({ error: 'Failed to save user' });
    }
    res.status(200).json({ message: 'User saved successfully', user });
  });
};
