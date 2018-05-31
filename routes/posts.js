'use strict';

module.exports = function(store) {
  return {
    getPosts(req, res) {
      res.status(200).send(store.posts);
    },
    addPost(req, res) {
      let newPost = {
        name: req.body.name,
        url: req.body.url,
        text: req.body.text,
        comments: []
      };
      let postId = store.posts.length;
      store.posts.push(newPost);
      res.status(201).send({ postId: postId });
    },
    updatePost(req, res) {
      if (!req.params.postId || req.params.postId < 0 || req.params.postId >= 
        store.posts.length) {
        return res.status(400).send();
      }
      store.posts[req.params.postId].name = req.body.name;
      store.posts[req.params.postId].url = req.body.url;
      store.posts[req.params.postId].text = req.body.text;
      res.status(200).send(store.posts[req.params.postId]);
    },
    removePost(req, res) {
      if (!req.params.postId || req.params.postId < 0 || req.params.postId >= 
        store.posts.length) {
        return res.status(400).send();
      }
      store.posts.splice(req.params.postId, 1);
      res.status(204).send();
    }
  };
};