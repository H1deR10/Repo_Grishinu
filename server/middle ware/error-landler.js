export default (err, req, res, rext) => {
    console.error(err)
    res.status(err.status || 500).json ({
        message: err.message || `Iternal Server Error`
    })
}