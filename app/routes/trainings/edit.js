import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.store.findRecord('training', params.training_id);
  },

  actions: {

    saveTraining(training) {
      training.save().then(() => this.transitionTo('trainings'));
    },

  
  }
});