let moment = require('moment');
moment().format();

/* Calculate time read */
        
function getMinutesRead(sessions) {
    let milliseconds = 0;
    for(let session of sessions) {
        const end = new moment(session.end);
        const start = new moment(session.start);

        const time = (end - start);
        milliseconds += time;
    }

    var minutes = Math.floor(milliseconds / 60000);
    var seconds = ((milliseconds % 60000) / 1000).toFixed(0);

    return `${minutes}:${seconds}`;
}

/* Calculate streak */

function getStreak(sessions) {
    let streak = 0;
    let daysRead = getDaysRead(sessions);
    let today = moment();

    for (let [i, day] in daysRead) {
        console.log(moment(today).subtract(i, 'days').startOf('day').format('LL'));
        if (daysRead.includes(moment(today).subtract(i, 'days').startOf('day').format('LL'))) {
            streak += 1;
        }
    }
    return streak;
}

/* Get days read */

function getDaysRead(sessions) {
    let daysRead = [];

    for (let session of sessions) {
        const date = new moment(session.start).format('LL');
        daysRead.includes(date) ? null : daysRead.push(date);
    }

    return daysRead;
}

module.exports = {
    getMinutesRead,
    getStreak,
    getDaysRead
}