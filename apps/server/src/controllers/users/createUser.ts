import bcrypt from 'bcrypt';

import { generateToken } from '../../helpers/generateToken';
import { UserSchema } from '../../models/Users.model';

export const createUser = async (req, res) => {
  try {
    const { fullName, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      res.status(400).json({ error: 'Password and confirm password are different' });
      return;
    }

    const token = generateToken();

    const newUser = new UserSchema({
      fullName,
      email,
      password,
      verifyToken: token,
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;

    await newUser.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
