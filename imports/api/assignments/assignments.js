import { Mongo } from "meteor/mongo";

export const Assignments = new Mongo.Collection("Assignments");

Assignments.deny({
    insert(){ return true; },
    update(){ return true; },
    remove(){ return true; }
});

Assignments.allow({
    insert(){ return false; },
    update(){ return false; },
    remove(){ return false; }
});