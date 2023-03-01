import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({

    log:["query"],
    errorFormat: "minimal"

});

const connectDB = ()=>{
    try{
        prisma.$connect();
        console.log("Connected to Database")

    }catch(err){

        console.log(err)
        process.exit(1)

    }

}

export {prisma, connectDB}