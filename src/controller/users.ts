import { Response } from 'express';
import { CustomRequest } from '../middleware/authenticate';
import UserDb from '../service/userDb';

const userDb = UserDb.getInstance();

const getUserProfile = async (req: CustomRequest, res: Response) => {
  try {
    const { userId } = req;
    if (userId) {
      const userData = userDb.getUser(userId);
      return res.json({ data: userData });
    }
    return res.status(404).json({ message: 'User not found' });
  } catch (error) {
    console.error('Error occurred', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { getUserProfile };
