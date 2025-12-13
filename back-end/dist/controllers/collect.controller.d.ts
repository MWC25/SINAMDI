import { NextFunction, Request, Response } from 'express';
export declare const collectController: {
    createCollect(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    getAllCollect(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    updateCollect(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    deleteCollect(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
};
//# sourceMappingURL=collect.controller.d.ts.map