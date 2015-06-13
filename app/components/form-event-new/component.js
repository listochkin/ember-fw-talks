import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    newEvent (name, logo, date) {
      this.sendAction('newEvent', { name, logo, date });
    }
  }
});
