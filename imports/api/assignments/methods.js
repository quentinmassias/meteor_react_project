import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Assignment } from "./assignments";

export const insertAssignment = new ValidatedMethod({
    name: 'Assignment.methods.insert',
    validate: new SimpleSchema({
        entitled: { type: String },
        promotionId: { type: String }
    }).validator(),
    run(assignment) {
        Assignment.insert(assignment);
    }
});
