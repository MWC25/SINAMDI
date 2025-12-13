import { NextFunction, Request, Response } from 'express';
export declare const userController: {
    create(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    getUserById(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    updateUser(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    deleteUser(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
};
//# sourceMappingURL=user.controller.d.ts.map