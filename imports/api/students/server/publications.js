// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Students } from '../students.js';

Meteor.publish('students.all', function () {
    return Students.find();
});

Meteor.publish('students.getByPromotionId', function (parameters) {
    return Students.find(parameters.filters, parameters.options);
});