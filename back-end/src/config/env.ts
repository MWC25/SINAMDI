import * as jwt from "jsonwebtoken";

export const PORT = process.env.PORT!;
export const JWTSECRET: jwt.Secret = process.env.JWT_SECRET!;
export const DATABASE_URL = process.env.DATABASE_URL!;
export const USER_ADMIN_DEFAULT_PASSWORD = process.env.USER_ADMIN_DEFAULT_PASSWORD!;