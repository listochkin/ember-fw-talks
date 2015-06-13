import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveEvent (event) {
      const eventModel = this.store.createRecord('event', event);
      eventModel.save();
    }
  }
});
