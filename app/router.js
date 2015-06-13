import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('event-list', function() {
    this.route('event', function() {
      this.route('new');
    });
  });
});

export default Router;
