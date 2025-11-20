export enum SleepQuality {
    VERY_BAD = 4,
    BAD = 3,
    AVERAGE = 2,
    GOOD = 1,
    VERY_GOOD = 0,
}

// (SleepQuality * 2) + (insonia ? 2 : 0)
// muito bom = 0 - ruim = 10