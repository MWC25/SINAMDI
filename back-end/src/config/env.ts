import * as jwt from "jsonwebtoken";

export const PORT = process.env.PORT!;
export const JWTSECRET: jwt.Secret = process.env.JWT_SECRET!;
export const DATABASE_URL = process.env.DATABASE_URL!;
export const USER_ADMIN_DEFAULT_PASSWORD = process.env.USER_ADMIN_DEFAULT_PASSWORD!;
export const COOKIES_SECRET = process.env.COOKIES_SECRET!;
export const URL_FRONT_CORS = process.env.URL_FRONT_CORS!;
export const URL_SERVER = process.env.URL_SERVER!;
