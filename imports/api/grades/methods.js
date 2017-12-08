import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import { Grades } from "./grades";

export const insertGrades = new ValidatedMethod({
    name: 'Grades.methods.insert',
    validate: new SimpleSchema({
        value: { type: Number },
        assignmentId: { type: String },
        studentId: { type: String }
    }).validator(),
    run(grade) {
        Grades.insert(grade);
    }
});
