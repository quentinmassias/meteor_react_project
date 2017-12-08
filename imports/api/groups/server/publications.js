// All links-related publications

import { Meteor } from 'meteor/meteor';
import { Groups } from '../groups.js';

Meteor.publish('groups.all', function () {
    return Groups.find();
});
