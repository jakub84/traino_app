import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findRecord('profile', 0);
  },

  actions: {

    updateProfile(profile) {
      profile.save().then(() => this.transitionTo('trainings'));
    },

  
  }
});