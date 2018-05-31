'use strict';

module.exports = function(store) {
  return {
    getComments(req, res) {
      if (!req.params.postId || req.params.postId < 0 || req.params.postId >= 
        store.posts.length) {
        return res.status(400).send();
      }
      res.status(200).send(store.posts[req.params.postId].comments);
    },
    addComment(req, res) {
      if (!req.params.postId || req.params.postId < 0 || req.params.postId >= 
        store.posts.length) {
        return res.status(400).send();
      }
      let newComment = {
        text: req.body.text
      };
      let commentId = store.posts[req.params.postId].comments.length
      store.posts[req.params.postId].comments.push(newComment);
      res.status(201).send({ commentId: commentId });
    },
    updateComment(req, res) {
      if (!req.params.postId || req.params.postId < 0 || req.params.postId >=
        store.posts.length || !req.params.commentId || req.params.commentId < 0
        || req.params.commentId >=
        store.posts[req.params.postId].comments.length) {
        return res.status(400).send();
      }
      store.posts[req.params.postId].comments[req.params.commentId] =
        req.body.text;
      res.status(200).send(
        store.posts[req.params.postId].comments[req.params.commentId]
      );
    },
    removeComment(req, res) {
      if (!req.params.postId || req.params.postId < 0 || req.params.postId >= 
        store.posts.length || !req.params.commentId || req.params.commentId < 0
        || req.params.commentId > 
        store.posts[req.params.postId].comments.length) {
        return res.status(400).send();
      }
      store.posts[req.params.postId].comments.splice(req.params.commentId, 1);
      res.status(204).send();
    }
  };
};