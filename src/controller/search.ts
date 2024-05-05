import { Request, Response } from 'express';
import { searchItems } from '../service/spotify';

const search = async (req: Request, res: Response) => {
  try {
    const { q, type } = req.query as { q: string; type: string };
    const result = await searchItems({ q, type, limit: 5 });
    res.json(result);
  } catch (error) {
    console.error('Error occurred', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { search };
