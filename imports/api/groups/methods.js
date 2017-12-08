import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Groups } from "./groups";

Meteor.methods({
    'Groups.insert'(name, classId) {
        check(name, String);
        check(classId, String);

        return Groups.insert({
            name: name,
            classId: classId,
            createdAt: new Date()
        });
    }
});
