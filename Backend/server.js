import app from "./app.js";

app.listen(process.env.PORT, ()=>{
    console.log(`Server Listening at PORT ${process.env.PORT}`);
})