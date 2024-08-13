import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "Name Required!"],
        minLength:[3,"Name must Contain atleast 3 letters"]
    },
    email:{
        type: String,
        required:[true, "email Required!"],
        validator:[validator.isEmail,"Please provide a Valid Email!"]
    },
    subject:{
        type: String,
        required:[true, "Subject Required!"],
        minLength:[5,"Subject must Contain atleast 5 letters"]
    },
    message:{
        type: String,
        required:[true, "Message Required!"],
        minLength:[5,"Message must Contain atleast 5 letters"]
    }
});

export const Message = mongoose.model("Message", messageSchema);