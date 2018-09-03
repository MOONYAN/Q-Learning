let self = {};

let map = {
    0: [4],
    1: [3, 5],
    2: [3],
    3: [1, 2, 4],
    4: [0, 3, 5],
    5: [1, 4]
};
/**
 * 
 * @param {number} state 
 * @returns {[]} actions
 */
self.getActions = (state) => {
    return map[state];
}

module.exports = self;