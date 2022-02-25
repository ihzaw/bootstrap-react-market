const createTimestampId = () => {
    let now  = new Date()
    let result = now.getMonth().toString() + now.getDate().toString() + now.getHours().toString() + now.getMinutes().toString() + now.getSeconds().toString()
    console.log(result , parseInt(result))
    return parseInt(result)
}

module.exports = createTimestampId