const { UserInfo } = require('../models');

const createUser = async(req,res,next)=>{
    try{
        const user = await UserInfo.create();
        return res.json(user._id);
    }catch(error){
        console.error(error);
        next(error);
    }
}

const postUserInfo = async(req,res,next)=>{

    try{
        const {
            isInfected,
            isVaccined,
            vaccine,
            firstInjection,
            secondInjection
        } = req.body;

        const user = await UserInfo.create({
            isInfected,
            isVaccined,
            vaccine,
            firstInjection,
            secondInjection
        });
        return res.json(user);
    }catch(error){
        console.error(error);
        next(error);
    }
}

const getUserInfo = async(req,res,next)=>{
    const {id} = req.params;
    try {
        const userInfo = await UserInfo.findByPk(id);
        return res.json(userInfo);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports = {createUser, getUserInfo, postUserInfo};