import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import training from './models/training';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('trainings', {path:'/'}, function() {
   
    // this.route('edit',{path: '/training_id/edit:'})
  });
  this.route('trainings.new',{path:'new'})
  // this.route('add-training');
});

export default Router;




