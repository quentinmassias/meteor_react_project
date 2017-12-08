// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Assignments } from '../assignments.js';

Meteor.publish('assignments.all', function () {
    return Assignments.find();
});

Meteor.publish('assignments.getByPromotionId', function (promotionId) {
    return Assignments.find({ promotionId: promotionId });
});
