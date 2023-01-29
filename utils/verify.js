const { TOKEN_REQUIRED, AUTHORIZED_MESSAGE, INVALID_TOKEN, ADMIN_TOKEN, NOT_ADMIN, USER_NOT_FOUND } = require("./Messages")
const jwt = require('jsonwebtoken')

const VerifyAdmin = (req,res,next)=>{
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    jwt.verify(bearerToken, process.env.JWT_SECRET, function(err, decoded) {
      if(err){return res.status(500).json(INVALID_TOKEN)}
     if(decoded){
      if(decoded.data.isAdmin === false){
        return res.status(500).json(NOT_ADMIN)
       }else{
        //  res.status(200).json(ADMIN_TOKEN)
         return next()
       }
     }
    });

  } else {
    res.sendStatus(403);
  }
}

const VerifyUser = (req,res,next)=>{
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearerToken = bearerHeader.split(" ")[1];
    jwt.verify(bearerToken, process.env.JWT_SECRET, function(err, decoded) {
      if(err){return res.status(500).json('INVALID_TOKEN')}
     if(decoded){
        //  res.status(200).json(ADMIN_TOKEN)
         return next()
     }
    });
  } else {
   res.sendStatus(403);
  }
}


module.exports = {VerifyUser,VerifyAdmin}