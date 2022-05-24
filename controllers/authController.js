
const jwt = require("jsonwebtoken");
module.exports = function (req,res,next){
    if(!req.header('Token-Secret'))
    {
        return res.status(401).send("Acess denied:Not have a token");
    }else{
        const userVerified = jwt.verify(req.header('Token-Secret'),process.env.TOKEN_SECRET);
        req.user = userVerified;
        next();
    }
}