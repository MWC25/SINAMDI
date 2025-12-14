import { NextFunction, Request, Response } from 'express';
export declare const authController: {
    login(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    logout(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
};
//# sourceMappingURL=auth.controller.d.ts.map