import user from "../models/user"

export const register = async(req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const newUser = new user({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        
        await newUser.save()
        res.status(200).send("new user created successfully")
    }catch(err){
        next(err)
    }
}