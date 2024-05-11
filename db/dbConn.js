import mongoose from "mongoose";
const connectToDb=async()=>{
    try {
        const {connection}=await mongoose.connect(
            `mongodb://127.0.0.1:27017/YOUTUBE`
        );
        if(connection){
            console.log(`connected to database :${connection.host}`)
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectToDb;