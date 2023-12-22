import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { UserSchema } from '../../models/Users.model';

export const signInUser = async (req, res) => {
  try {
    const user = await UserSchema.findOne({ email: req.body.email });

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);

    if (!passwordMatch) {
      res.status(400).json({ error: 'Wrong credentials' });
      return;
    }

    user.password = undefined;

    const token = await jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.cookie('Authorization', token, { maxAge: 86400 * 30, httpOnly: false });

    res.status(201).json({ fullName: user.fullName, email: user.email, _id: user._id });
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
