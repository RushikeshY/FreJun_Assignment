const mongoose = require("mongoose");
const BlogListSchema = new mongoose.Schema({

  title: { type: String, required: true },

  body: { type: String, required: true },
  
  category: { type: String, required: true }
});
const BlogListModel = new mongoose.model("blog", BlogListSchema);
module.exports = BlogListModel;
