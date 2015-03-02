app.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    showElephantInfo: function() {
      alert("Elephants are large mammals of the family Elephantidae and the order Proboscidea.");
    },
    togglePicture: function() {
      if(this.isPictureShowing) {
        this.set('isPictureShowing', false);
      } else {
        this.set('isPictureShowing', true);
      }
    }
  }
});