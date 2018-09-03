let self = {};

let table = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
];

self.update = (state, action, value) => {
    table[state][action] = value;
}

self.getQvalue = (state, action) => {
    return table[state][action];
}

self.log = () => console.log(table);

module.exports = self;