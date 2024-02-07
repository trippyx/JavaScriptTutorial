
const logMidWare = (req,res,next) => {
    console.log(`${req.method} - ${req.url}`);
    console.log(`${JSON.stringify(req.body)}`);
    next()
}

module.exports = logMidWare