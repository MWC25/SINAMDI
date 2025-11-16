import * as jwt from "jsonwebtoken";

export const PORT = process.env.PORT || 8080;
export const JWTSECRET: jwt.Secret = process.env.JWT_SECRET!;