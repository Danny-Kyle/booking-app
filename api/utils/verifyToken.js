import pkg from "jsonwebtoken"
import { createError } from "./error.js"

const {jwt, verify} = pkg

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if(!token) {
        return next(createError(401, "you're not authenticated!"));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err){
            return next(createError(403, "Token not valid!"));
        }
        req.user = user;
        next();
    })
}

export const verifyUser  = (req, res, next) => {
    verifyToken(res, req, next, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            if(err){
                return next(createError(403, "You are not authorized!"))
            }
        }
    } )
}

export const verifyAdmin  = (req, res, next) => {
    verifyToken(res, req, next, ()=>{
        if(req.user.isAdmin){
            next();
        }else{
            if(err){
                return next(createError(403, "You are not authorized!"))
            }
        }
    } )
}