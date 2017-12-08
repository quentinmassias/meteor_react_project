// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Grades } from '../grades.js';

Meteor.publish('grades.all', function () {
    return Grades.find();
});
