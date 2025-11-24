export const ErrorTypes = {
    BAD_REQUEST: {
        code: 'BAD_REQUEST',
        status: 400,
        defaultMessage: 'The request is invalid.',
    },
    VALIDATION: {
        code: 'VALIDATION_ERROR',
        status: 400,
        defaultMessage: 'The provided data is invalid.',
    },
    UNAUTHORIZED: {
        code: 'UNAUTHORIZED',
        status: 401,
        defaultMessage: 'Authentication is required or has failed.',
    },
    FORBIDDEN: {
        code: 'FORBIDDEN',
        status: 403,
        defaultMessage: 'You do not have permission to access this resource.',
    },
    NOT_FOUND: {
        code: 'NOT_FOUND',
        status: 404,
        defaultMessage: 'The requested resource was not found.',
    },
    CONFLICT: {
        code: 'CONFLICT',
        status: 409,
        defaultMessage:
            'The request conflicts with the current state of the resource.',
    },
    UNPROCESSABLE_ENTITY: {
        code: 'UNPROCESSABLE_ENTITY',
        status: 422,
        defaultMessage: 'The server cannot process the provided data.',
    },
    TOO_MANY_REQUESTS: {
        code: 'TOO_MANY_REQUESTS',
        status: 429,
        defaultMessage: 'Too many requests. Please try again later.',
    },
    INTERNAL: {
        code: 'INTERNAL_ERROR',
        status: 500,
        defaultMessage: 'An internal server error occurred.',
    },
} as const;

export type ErrorType = (typeof ErrorTypes)[keyof typeof ErrorTypes];

export interface httpError extends Error {
    errorType: ErrorType;
}

export function createHttpError(
    errorType: ErrorType,
    message?: string
): httpError {
    const error: httpError = new Error(
        message || errorType.defaultMessage
    ) as httpError;
    error.errorType = errorType;
    return error;
}
