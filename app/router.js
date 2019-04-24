import EmberRouter from '@ember/routing/router';
import config from './config/environment';
import training from './models/training';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('trainings', {path:'/'}, function() {
    
  });
  this.route('trainings.new',{path:'new'})
  this.route('trainings.edit',{path: ':training_id'})
 
});

export default Router;




