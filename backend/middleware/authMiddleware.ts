import jwt from "jsonwebtoken";
const SECRET_KEY = process.env.SECRET_KEY!;

export interface JwtPayload {
  id: number;
  email: string;
  role: string;
}

export function verifyToken(token: string): JwtPayload {
    try {
        return jwt.verify(token, SECRET_KEY) as JwtPayload
    } catch (error) {
        console.error("JWT Error authMiddleware:", error);
        throw error;
    }
}