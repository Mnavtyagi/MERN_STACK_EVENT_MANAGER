import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, { dbName: "MERN_STACK_EVENT_MESSAGE" }).then(() => {
        console.log("Connected to Database Successfully!");
    }).catch(err => {
        console.log("Some error occurred while connecting to Database: ", err);
    });
};
