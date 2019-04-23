import Controller from '@ember/controller';
import { empty } from '@ember/object/computed';
export default Controller.extend({
    title: '',
    date: '',
    description: '',
    isDisabled: empty('title') && empty('date') && empty('description'),
    actions: {

        addTraining() {

            const title = this.get('title')
            const date = this.get('date')
            const description = this.get('description')
            const newTrainigs = this.store.createRecord('training', {title:title},{date:date},{description:description})
            newTrainigs.save()


            this.set('title', '')
            this.set('date', '')
            this.set('description', '')
        }

    }
});
