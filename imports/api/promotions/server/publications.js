// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Promotions } from '../promotions.js';

Meteor.publish('promotions.all', function () {
    return Promotions.find();
});

Meteor.publish('promotions.getById', function (id) {
    return Promotions.find({ _id: id });
});
