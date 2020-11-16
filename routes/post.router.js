const express = require("express")
const router = express.Router()
const Post = require("../models/post.model")


router.get("/", (req, res) =>{
    Post.find()
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Request failed"));
});

router.get("/:id", (req, res) =>{
    Post.find({ _id: req.params.id})
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Request failed"));
});

router.post("/", (req, res) => {
    const {title, description} = req.body;
    const post = new Post({
        title,
        description,
    });
    post.save()
    .then((resp) => {res.status(201).json(resp)})
    .catch((err) => {res.status(400).json("Request failed")});
});

router.delete("/:id", (req, res) => {
    Post.remove({ _id: req.params.id })
    .then((resp) => {res.status(200).json(resp)})
    .catch((err) => res.status(400).json("Requeset failed"));
});

router.patch("/:id", (rea, res) =>{
    Post.updateOne({ _id: req.params.id}, { $set: req.body})
    .then((resp) => res.status(200).json(resp))
    .catch((err) => res.status(400).json("Request failed"));
});

module.exports = router;
