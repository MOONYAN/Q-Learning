let self = {};

let map = {
    0: { 4: 0 },
    1: { 3: 0, 5: 100 },
    2: { 3: 0 },
    3: { 1: 0, 2: 0, 4: 0 },
    4: { 0: 0, 3: 0, 5: 100 },
    5: { 1: 0, 4: 0, 5: 100 }
};

self.getReward = (state, action) => {
    return map[state][action];
}

module.exports = self;