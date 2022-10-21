const Router = require("express");
const BlogListModel = require("./Model/model");
const BlogController = Router();

BlogController.get("/", async (req, res) => {
  const { page, limit } = req.query;

  const BlogList = await BlogListModel.find({})
    .limit(limit)

    .skip((page - 1) * limit);

  if (BlogList.length == 0) {
    return res.status(404).send({ message: "no data found" });
  } else {
    return res.status(200).send({ BlogList });
  }

}

);



BlogController.post("/create", async (req, res) => {
  const { title, body, category } = req.body;
  
  const newBlog = new BlogListModel({
    title,
    body,
    category,
  });
  await newBlog.save();

  return res.status(200).send({ message: "data saved successfully", newBlog });
});

module.exports = BlogController;
