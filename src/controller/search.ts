import { Request, Response } from 'express';
import { searchItems } from '../service/spotify';
import { parseTracks } from '../utils/spotify';

const search = async (req: Request, res: Response) => {
  try {
    const { q, type } = req.query as { q: string; type: string };
    const result = await searchItems({ q, type, limit: 5 });
    const parsedResult = parseTracks(result);
    res.json(parsedResult);
  } catch (error) {
    console.error('Error occurred', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { search };
