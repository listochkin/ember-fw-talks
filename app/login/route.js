import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    authenticateSession () {
      this.get('session').authenticate('authenticator:firebase', {});
    }
  }
});
