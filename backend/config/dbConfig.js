require("dotenv").config()
console.log(process.env.MONGO_PASS);

const MONGO_URL =  process.env.MONGO_URL;

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

module.exports = { MONGO_URL, mongooseOptions}