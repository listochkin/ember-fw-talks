import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['offset', 'limit'],

  offset: 0,
  limit: 5
});
