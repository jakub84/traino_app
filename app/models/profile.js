import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    mail: DS.attr('string'),
    phone: DS.attr('string'),
    address: DS.attr('string'),
    gender: DS.attr('string')




});
