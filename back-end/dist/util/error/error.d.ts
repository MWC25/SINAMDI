export declare const ErrorTypes: {
    readonly BAD_REQUEST: {
        readonly code: "BAD_REQUEST";
        readonly status: 400;
        readonly defaultMessage: "The request is invalid.";
    };
    readonly VALIDATION: {
        readonly code: "VALIDATION_ERROR";
        readonly status: 400;
        readonly defaultMessage: "The provided data is invalid.";
    };
    readonly UNAUTHORIZED: {
        readonly code: "UNAUTHORIZED";
        readonly status: 401;
        readonly defaultMessage: "Authentication is required or has failed.";
    };
    readonly FORBIDDEN: {
        readonly code: "FORBIDDEN";
        readonly status: 403;
        readonly defaultMessage: "You do not have permission to access this resource.";
    };
    readonly NOT_FOUND: {
        readonly code: "NOT_FOUND";
        readonly status: 404;
        readonly defaultMessage: "The requested resource was not found.";
    };
    readonly CONFLICT: {
        readonly code: "CONFLICT";
        readonly status: 409;
        readonly defaultMessage: "The request conflicts with the current state of the resource.";
    };
    readonly UNPROCESSABLE_ENTITY: {
        readonly code: "UNPROCESSABLE_ENTITY";
        readonly status: 422;
        readonly defaultMessage: "The server cannot process the provided data.";
    };
    readonly TOO_MANY_REQUESTS: {
        readonly code: "TOO_MANY_REQUESTS";
        readonly status: 429;
        readonly defaultMessage: "Too many requests. Please try again later.";
    };
    readonly INTERNAL: {
        readonly code: "INTERNAL_ERROR";
        readonly status: 500;
        readonly defaultMessage: "An internal server error occurred.";
    };
};
export type ErrorType = (typeof ErrorTypes)[keyof typeof ErrorTypes];
export interface httpError extends Error {
    errorType: ErrorType;
}
export declare function createHttpError(errorType: ErrorType, message?: string): httpError;
//# sourceMappingURL=error.d.ts.map