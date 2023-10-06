const mongoose = require('mongoose');

module.exports = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1/nodedemo", { useNewUrlParser: true });
        console.log('database connected');
    }
    catch (error) {
        console.log('database connectivity error', error);
        throw new Error(error);
    }
}