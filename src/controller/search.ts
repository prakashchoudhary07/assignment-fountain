import { Request, Response } from 'express';

const search = (req: Request, res: Response) => {
  res.send('search api');
};

export { search };
