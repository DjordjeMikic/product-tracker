import jwt from 'jsonwebtoken';

import { getCurrentUnixTime } from '../helpers/getUnixTime';

const unauthResponse = { error: 'User is not authenticated' };

export const userAuthenticated = (req, res, next) => {
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

  next();
};
