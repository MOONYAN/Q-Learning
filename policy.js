const actionSpace = require('./actionSpace');
let epsilon = 0.3;

let self = {};

function exploit(state, qTable) {
    let actions = actionSpace.getActions(state);
    actions.sort((a, b) => {
        return qTable.getQvalue(a) < qTable.getQvalue(b);
    });
    return actions[0];
}

function explore(state) {
    let actions = actionSpace.getActions(state);
    let randomindex = Math.floor(Math.random() * actions.length);
    return actions[randomindex];
}

self.chooseAction = (state, qTable) => {
    if (Math.random() >= epsilon) {
        return exploit(state, qTable);
    } else {
        return explore(state);
    }
}

module.exports = self;