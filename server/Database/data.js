import mongoose from "mongoose";



 const Connection=async(Url)=>{
  

    try{
        await mongoose.connect(Url,{ useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database Connected Sucessfully...")


    }catch(error){
        console.log('Error While Connecting in Database Cheack Databse connectivity..',error.message);
    }


};
export default Connection;