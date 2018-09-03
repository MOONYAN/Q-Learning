let rewardMap = require('./rewardMap');
let actionSpace = require('./actionSpace');
let qTable = require('./qTable');
let policy = require('./policy');
let gamma = 0.8;
let eta = 0.1;

function isTermionalState(state) {
    return state == 5;
}

function takeAction(state, action) {
    return {
        nextState: action,
        reward: rewardMap.getReward(state, action)
    };
}

function updateQtable(state, action, reward, nextState) {
    let qValue = qTable.getQvalue(state, action);
    let qs = actionSpace.getActions(nextState).map(action => qTable.getQvalue(nextState, action));
    qValue = qValue + eta * (reward + gamma * Math.max(...qs) - qValue);
    qTable.update(state, action, qValue);
}

function runEpisode(initState) {
    let state = initState;
    let sequence = [initState];
    do {
        let action = policy.chooseAction(state, qTable);
        let { nextState, reward } = takeAction(state, action);
        updateQtable(state, action, reward, nextState);
        state = nextState;
        sequence.push(state);
    } while (!isTermionalState(state))
    qTable.log();
    console.log(sequence);
}

for (let initState of [1, 3, 5, 2, 4, 0]) {
    console.log('------------------episode begin at ' + initState);
    runEpisode(initState);
}