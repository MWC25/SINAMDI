import * as jwt from "jsonwebtoken";

export const PORT = process.env.PORT!;
export const JWTSECRET: jwt.Secret = process.env.JWT_SECRET!;
export const DATABASEURL = process.env.DATABASE_URL!;
export const USERADMINDEFAULTPASSWORD = process.env.USER_ADMIN_DEFAULT_PASSWORD!;
export const COOKIESSECRET = process.env.COOKIES_SECRET!;
export const URLFRONTCORS = process.env.URL_FRONT_CORS!;
export const URLSERVER = process.env.URL_SERVER!;
