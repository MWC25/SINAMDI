import path from "node:path";
import fs from "node:fs";
import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

const { combine, timestamp, printf, colorize } = winston.format;

const timezoned = () => {
    return new Date().toLocaleString('pt-BR', {
        timeZone: 'America/Recife',
        hour12: false,
    });
};

const logsDir = path.join(process.cwd(), 'logs');

if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
}

const logFormat = printf(({ level, message, timestamp, ...meta }) => {
    return `[${timestamp}] - [${level}]: ${message} ${
        Object.keys(meta).length ? JSON.stringify(meta) : ''
    }`;
});

const combinedTransport = new DailyRotateFile({
    dirname: logsDir,
    filename: '%DATE%combined.log',
    datePattern: 'DDMMYYYY',
    zippedArchive: false, 
    maxSize: '20m',
    maxFiles: 30,
    level: 'info',
});


const errorTransport = new DailyRotateFile({
    dirname: logsDir,
    filename: '%DATE%error.log',
    datePattern: 'DDMMYYYY',
    zippedArchive: false,
    maxSize: '20m',
    maxFiles: 30,
    level: 'error',
});

export const logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp({ format: timezoned }), logFormat),
    transports: [
        errorTransport,
        combinedTransport,
        new winston.transports.Console({
            format: combine(colorize(), timestamp(), logFormat),
        }),
    ],
});
