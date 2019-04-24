import Route from '@ember/routing/route';
import { empty } from '@ember/object/computed';
export default Route.extend({
   
    isDisabled: false,
  model() {
    return this.store.createRecord('training');
  },

  actions: {

    addTraining(newTraining) {
        newTraining.save().then(() => this.transitionTo('trainings'));
    },

    willTransition() {
        let model = this.controller.get('model');
      
        if (model.get('isNew')) {
          model.destroyRecord();
        }
      }
}});