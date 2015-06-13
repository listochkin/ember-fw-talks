import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    offset: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    }
  },

  model (params) {
    return this.store.find('event', {
      startAt: params.offset,
      limitToLast: params.limit
    });
  }
});
