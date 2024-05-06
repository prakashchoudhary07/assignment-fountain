import { NextFunction, Request, Response } from 'express';

const validateSearchQueryParams = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any | Response> => {
  try {
    const { q } = req.query as { q: string; type: string };
    let isValid = true;
    let message;
    if (q.length === 0) {
      isValid = false;
      message = `\'q\' query params cannot be empty`;
    }
    if (isValid) {
      return next();
    }
    return res.status(400).json({ message });
  } catch (err: any) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export { validateSearchQueryParams };
