import jwt from "jsonwebtoken";

export const createAcessToken = (paylod)=>{ //generalmente se llama paylod
    return new Promise((resolve, reject) => {
        jwt.sign(paylod, "xyz123", {expiresIn: "1d"},
        (err, token) => {
            if(err) reject (err);
            resolve(token);
        });
    });
    

}