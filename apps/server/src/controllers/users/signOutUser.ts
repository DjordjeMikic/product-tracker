export const signOutUser = (req, res) => {
  res.clearCookie('Authorization');
  res.status(200).json({ message: 'User signed out' });
};
