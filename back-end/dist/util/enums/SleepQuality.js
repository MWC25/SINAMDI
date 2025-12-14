"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SleepQuality = void 0;
var SleepQuality;
(function (SleepQuality) {
    SleepQuality[SleepQuality["VERY_BAD"] = 4] = "VERY_BAD";
    SleepQuality[SleepQuality["BAD"] = 3] = "BAD";
    SleepQuality[SleepQuality["AVERAGE"] = 2] = "AVERAGE";
    SleepQuality[SleepQuality["GOOD"] = 1] = "GOOD";
    SleepQuality[SleepQuality["VERY_GOOD"] = 0] = "VERY_GOOD";
})(SleepQuality || (exports.SleepQuality = SleepQuality = {}));
// (SleepQuality * 2) + (insonia ? 2 : 0)
// muito bom = 0 - ruim = 10
//# sourceMappingURL=SleepQuality.js.map