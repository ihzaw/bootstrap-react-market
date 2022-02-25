const errorHandler = (err, req, res, next) => {
    console.log(err)
    const { name, message } = err
    switch (name) {
        case 'SOMETHING':
            break;
        default:
            res.status(500).json({ message: 'INTERNAL SERVER ERROR'})
            break;
    }
}

module.exports = errorHandler