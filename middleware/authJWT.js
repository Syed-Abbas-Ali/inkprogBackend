const jwt = require("jsonwebtoken");
const Admin = require("../model/adminModel");

const requireAuth = async (req, res, next) => {
  //verify authentication
  const { authorization } = req.headers;
  console.log("authorization")
 
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token needed." });
    
  }
  try {
    let userdata=authorization;
    console.log(userdata)
    await jwt.verify(userdata,process.env.JWT_SECRET,async(err, decoded) => {
      console.log(decoded)
      if (decoded){
        if(await Admin.findById({_id:decoded._id})){
          console.log("true")
          next();
        }
            } 
            else res.send(err);
    }
    );

  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request not authorized" });
  }
};

module.exports = {requireAuth};
