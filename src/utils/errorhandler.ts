import { Request, Response } from 'express';

export function errorHandler(req: Request, res: Response) {
  res.status(500).json({ message: 'Internal Server Error' });
}
