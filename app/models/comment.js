import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  text: DS.attr('string'),
  author: DS.belongsTo('author')  
});
