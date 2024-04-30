// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import express from "express"
import connectDB from "./db/index.js";

const app = express()
dotenv.config({
    path: './env'
})

connectDB()
.then( () => {
    const port = process.env.PORT || 8000;


    app.listen(port, () => {
        console.log(`server is running at port : ${port}`);
    });
})
.catch((err) => {
    console.log("MONGO db connection Failed !!!", err);
})

/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()
*/











/*
import express from "express"
const app = express()
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR: ", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/