"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = __importDefault(require("node:fs"));
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const { combine, timestamp, printf, colorize } = winston_1.default.format;
const timezoned = () => {
    return new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Recife',
        hour12: false,
    });
};
const logsDir = node_path_1.default.join(process.cwd(), 'logs');
if (!node_fs_1.default.existsSync(logsDir)) {
    node_fs_1.default.mkdirSync(logsDir, { recursive: true });
}
const logFormat = printf(({ level, message, timestamp, ...meta }) => {
    return `[${timestamp}] - [${level}]: ${message} ${Object.keys(meta).length ? JSON.stringify(meta) : ''}`;
});
const combinedTransport = new winston_daily_rotate_file_1.default({
    dirname: logsDir,
    filename: '%DATE%combined.log',
    datePattern: 'DDMMYYYY',
    zippedArchive: false,
    maxSize: '20m',
    maxFiles: 30,
    level: 'info',
});
const errorTransport = new winston_daily_rotate_file_1.default({
    dirname: logsDir,
    filename: '%DATE%error.log',
    datePattern: 'DDMMYYYY',
    zippedArchive: false,
    maxSize: '20m',
    maxFiles: 30,
    level: 'error',
});
exports.logger = winston_1.default.createLogger({
    level: 'info',
    format: combine(timestamp({ format: timezoned }), logFormat),
    transports: [
        errorTransport,
        combinedTransport,
        new winston_1.default.transports.Console({
            format: combine(colorize(), timestamp(), logFormat),
        }),
    ],
});
//# sourceMappingURL=logger.js.map