import mongoose from "mongoose";

const Database = (URI)=>{
    try {
        mongoose.connect(URI)
        const db = mongoose.connection
        db.once("open",()=>{
            console.log("Db is connected");        
        })
    } catch (error) {
        console.log("Unable to connect DB");
        
    }
}

export default Database