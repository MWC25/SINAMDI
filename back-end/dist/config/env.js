"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLSERVER = exports.URLFRONTCORS = exports.COOKIESSECRET = exports.USERADMINDEFAULTPASSWORD = exports.DATABASEURL = exports.JWTSECRET = exports.PORT = void 0;
exports.PORT = process.env.PORT;
exports.JWTSECRET = process.env.JWT_SECRET;
exports.DATABASEURL = process.env.DATABASE_URL;
exports.USERADMINDEFAULTPASSWORD = process.env.USER_ADMIN_DEFAULT_PASSWORD;
exports.COOKIESSECRET = process.env.COOKIES_SECRET;
exports.URLFRONTCORS = process.env.URL_FRONT_CORS;
exports.URLSERVER = process.env.URL_SERVER;
//# sourceMappingURL=env.js.map