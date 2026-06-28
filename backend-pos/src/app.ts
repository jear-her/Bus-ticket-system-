import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan"; 
import dotenv from "dotenv";
import { UserRouter } from "./routes/user.routes";
import "reflect-metadata"



dotenv.config();

const PORT=process.env.PORT||6000;


const app=express();

// global middleware

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());


// basic data




// router


app.use("/api/users",UserRouter)



// error handling
app.use((err:any,req:any,res:any,   next:any)=>{
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
}); 




app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});


