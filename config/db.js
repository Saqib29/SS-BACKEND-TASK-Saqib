import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL, {
            dbName: process.env.DB_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
          })

        console.log(`MongoDB Connected: ${connection.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error}`)
        process.exit(1)
    }
}

export default connectDB