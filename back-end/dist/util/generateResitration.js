"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRegistration = generateRegistration;
function generateRegistration() {
    const timestamp = Date.now();
    const randomNum = Math.floor(100 + Math.random() * 9000);
    const timestampPart = String(timestamp).substring(2, 8);
    const some = String(timestamp + randomNum);
    const randomPart = some.substring(9, 13);
    return `${timestampPart}${randomPart}`;
}
//# sourceMappingURL=generateResitration.js.map