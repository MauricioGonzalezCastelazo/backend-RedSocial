const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: '../config.env' });
const User = require('../models/usersModel');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
console.log(DB);
mongoose.connect(DB).then(console.log('Connected'));

const users = fs.readFileSync('./user.json', 'utf8')
const importData = async () => {
    try {
        await User.deleteMany();
        await User.create(JSON.parse(users));
        process.exit()

    } catch (err) {
        console.log(err);
    }
}

importData(); 