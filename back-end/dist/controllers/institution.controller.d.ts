import { NextFunction, Request, Response } from 'express';
export declare const institutionController: {
    createInstitution(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    getInstitutionById(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    getAllInstitutions(res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    updateInstitution(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    deleteInstitution(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
};
//# sourceMappingURL=institution.controller.d.ts.map