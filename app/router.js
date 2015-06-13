import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('event-list', { path: 'events' }, function() {
    this.route('event/new', { path: 'new' });
    this.route('event', { path: ':event_id' });
  });
  this.route('login');
});

export default Router;
