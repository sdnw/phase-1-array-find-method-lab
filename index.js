function superbowlWin(record) {
    const win = record.find(ele => ele.result === "W")
    return win ? win.year : undefined 
}

