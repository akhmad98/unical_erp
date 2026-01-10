import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  id: string;
  email: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    const decodedPayload = jwt.verify(token, process.env.JWT_SECRET as string) as UserPayload;

    req.userEmail = decodedPayload.email;

    next();

  } catch (error) {
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};
