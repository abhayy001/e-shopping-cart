const {mongoose} = require('mongoose')


exports.dbConnection = async() =>{
    try {
        await mongoose.connect("mongodb+srv://abhay:abhayabhay@cluster0.6itwk6b.mongodb.net/e-commerce")
        console.log('MongoDb Connected')
    } catch (error) {
        console.log(error.message)
    }
}