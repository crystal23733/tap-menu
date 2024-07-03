import { Request, Response } from 'express';
import path from 'path';

export const home = (req: Request, res: Response) => {
  console.log('경로', path.join('/public/home.html'));
  return res.sendFile(path.join('/public/home.html'));
};
