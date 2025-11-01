import jwt from "jsonwebtoken";




export function verifyToken(req,res,next){
    const authHeader = req.get('Authorization');
    
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token,'hello1234',(error,payload)=>{
            if(error){
                res.status(401).send({message:'Token is invalid'})
            }
            else{
                console.log(payload);
                req.loggedInAdminId = payload.adminId
                next();
            }
        });
        
    }
    else {
        res.status(401).send({message:'Token is missing'})
    }
}

