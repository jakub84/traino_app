import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        addTraining: function(){
            let title = this.get('title')
            let date = this.get('date')
            let description = this.get('description')
            console.log(title,date,description)

            let newTraining = this.store.createRecord('training', {
                // title: title,
                // date: new Date(date),
                // description: description
            })

            newTraining.save();

            this.setProperties({
                title: '',
                description:'',
                date:''
            })
        }
    }
});
