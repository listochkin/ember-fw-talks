import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  date: DS.attr('string'),
  logo: DS.attr('string')
});
