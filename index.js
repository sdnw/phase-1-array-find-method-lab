function superbowlWin(record) {
    let wins = record.find(el => el.result === 'W')
    console.log('wins: ', wins)
    if (wins) {
        return wins.year
    } else {
        return undefined
    }
}


