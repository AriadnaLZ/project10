const User = require("../../api/models/user");
const users = require('../../data/users')
const mongoose = require('mongoose')
require('dotenv').config()


mongoose
.connect(process.env.DB_URL)
.then(
  async () => {
    const allUsers = await User.find()
    if (allUsers.length) {
      await User.collection.drop()
    }
  }
)
.catch((err) => console.log('Error deleting data'))
.then(async () => {
  await User.insertMany(users)
})
.catch((err) => console.log('Error creating data'))
.finally(() => mongoose.disconnect())