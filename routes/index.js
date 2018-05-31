'use strict';

module.exports = function(app) {

  let store = {
    posts: []
  };
  
  const posts = require('./posts')(store);
  const comments = require('./comments')(store);

  // posts
  app.get('/posts', posts.getPosts);
  app.post('/posts', posts.addPost);
  app.put('/posts/:postId', posts.updatePost);
  app.delete('/posts/:postId', posts.removePost);
  
  // comments
  app.get('/posts/:postId/comments', comments.getComments);
  app.post('/posts/:postId/comments', comments.addComment);
  app.put('/posts/:postId/comments/:commentId', comments.updateComment);
  app.delete('/posts/:postId/comments/:commentId', comments.removeComment);
};