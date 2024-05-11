import app from "./app.js";
import connectToDb from "./db/dbConn.js";

const PORT=5000;
app.listen(PORT,async()=>{
    await connectToDb();
    console.log(`Server is running on port ${PORT}`);
})
