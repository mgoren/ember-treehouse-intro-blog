app.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('comments');
  this.resource('post', {path: '/posts/:post_id'}, function() {
    this.resource('new-comment');
  });
  this.resource('about');
  this.resource('contact', function() {
    this.resource('phone');
    this.resource('email');
  });
  this.resource('new-post');
});