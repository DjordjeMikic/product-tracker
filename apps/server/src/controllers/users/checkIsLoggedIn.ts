import jwt from 'jsonwebtoken';

import { getCurrentUnixTime } from '../../helpers/getUnixTime';
import { UserSchema } from '../../models/Users.model';

const unauthResponse = { error: 'User is not authenticated' };

export const checkIsLoggedIn = async (req, res) => {
  if (!req.headers.cookie) {
    res.status(401).json(unauthResponse);
    return;
  }

  const authCookie = req.headers.cookie?.split('=');
  const authIndex = authCookie.indexOf('Authorization');

  if (authIndex < 0) {
    res.status(401).json(unauthResponse);
    return;
  }

  const jwtToken = authCookie[authIndex + 1];

  if (!jwtToken) {
    res.status(401).json(unauthResponse);
    return;
  }

  const verify = jwt.verify(jwtToken, process.env.JWT_SECRET);

  if (getCurrentUnixTime() > verify.exp) {
    res.status(401).json(unauthResponse);
    return;
  }

  const user = await UserSchema.findById(verify.user._id);

  res.status(200).json({ fullName: user.fullName, email: user.email, _id: user._id });
};
