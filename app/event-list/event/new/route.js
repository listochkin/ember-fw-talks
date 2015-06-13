import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    saveEvent (event) {
      const eventModel = this.store.createRecord('event', event);
      eventModel.save();
    }
  }
});
