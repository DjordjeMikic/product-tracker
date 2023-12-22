import { UserSchema } from '../../models/Users.model';

export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserSchema.findById(id);

    res.status(200).json(user);
  } catch (e) {
    res.status(500).json({ error: e });
  }
};
