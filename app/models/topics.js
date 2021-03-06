const mongoose = require('mongoose')

const { Schema, model } = mongoose

const topicSchema = new Schema({
  __v: { type: Number, select: false },
  name: { type: String, required: true },
  avatar_url: { type: String },
  introduction: { type: String, select: false },
})

// ref与用户相关联

module.exports = model("Topic", topicSchema)