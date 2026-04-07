import mongoose from "mongoose";

const connectDB = async () => {

    const conectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log(`\n THE DB ARE CONNECTED :${conectionInstance.connection.host}`)

    try { } catch (error) {
        console.log(`DATABASE ARE NOT CONNECTED`, error)
        process.exit(1)
    }
}

export default connectDB