const errorHandler = (err, req, res, next) => {
    const { name, message } = err
    console.log(err)
    
    switch (name) {
        case 'BAD_REQUEST':
            res.status(400).json({ message: message || 'Error Code 400: Bad Request'})
            break;
        default:
            res.status(500).json({ message: message || 'Internal Server Error'})
            break;
    }
}

module.exports = errorHandler