import { Mongo } from "meteor/mongo";

export const Grades = new Mongo.Collection("Grades");

Grades.deny({
    insert(){ return true; },
    update(){ return true; },
    remove(){ return true; }
});

Grades.allow({
    insert(){ return false; },
    update(){ return false; },
    remove(){ return false; }
});