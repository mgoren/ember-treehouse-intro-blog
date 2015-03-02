app.ContactController = Ember.Controller.extend({
  actions: {
    messageSent: false,
    sendMsg: function() {
      var msg = prompt("The medium is the message.");
      this.set('confirmationNumber', Math.round(Math.random() * 10000));
      this.set('messageSent', true);
    }
  }
});