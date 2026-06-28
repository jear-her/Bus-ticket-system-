import { Request, Response } from "express";
import { user } from "../types/user.type";




const users:user[]=[
    {
        id:1,
        name:"Moe",
        email:"[EMAIL_ADDRESS]",
        password:"[PASSWORD]",
    }
    ,
    {
        id:2,
        name:"Htet",
        email:"[EMAIL_ADDRESS]",
        password:"[PASSWORD]",
    },
    {
        id:3,
        name:"Kyaw",
        email:"[EMAIL_ADDRESS]",
        password:"[PASSWORD]",
    }
]

export const getUser =(req:Request,res:Response)=>{
    try{
        if(users.length>0){
            res.status(200).json({
                message:"User data fetched successfully",
                data:users
            })

        }
    }catch(err){
        res.status(500).json({
            message:"User data not found",
        })
    }

}