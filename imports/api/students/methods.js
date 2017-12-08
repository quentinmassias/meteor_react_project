import { Meteor } from "meteor/meteor";
import { Students } from "./students";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const insertStudent = new ValidatedMethod({
    name: 'Students.methods.insert',
    validate: new SimpleSchema({
        firstName: { type: String },
        lastName: { type: String },
        promotionId: { type: String },
        createdAt: { type: Date }
    }).validator(),
    run(student) {
        Students.insert(student);
    }
});