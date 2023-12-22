import { UserSchema } from '../models/Users.model';

export const userExists = async (req, res, next) => {
  try {
    const user = await UserSchema.findOne({ email: req.body.email });

    if (user) {
      res.status(400).json('User is already registered');
      return;
    }

    next();
  } catch (e) {
    res.status(500).json('Server error. Try Again');
    return;
  }
};
