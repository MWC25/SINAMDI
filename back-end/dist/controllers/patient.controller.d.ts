import { NextFunction, Request, Response } from 'express';
export declare const patientController: {
    create(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    getAll(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    getById(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    update(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    delete(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
};
//# sourceMappingURL=patient.controller.d.ts.map