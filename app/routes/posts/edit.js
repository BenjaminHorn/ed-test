import Ember from 'ember';
const {RSVP} = Ember;
export default Ember.Route.extend({
  model: function(params){
    var store = this.store;
    return RSVP.hash({
      post: this.store.find('post', params.post_id),
      authors: store.findAll('author')
    });
  },
  actions: {
    willTransition: function() {
      let model = this.controller.get('model.post');
      model.hasMany('comments').reload();
    }
  }  
});
