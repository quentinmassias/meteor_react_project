import { Mongo } from "meteor/mongo";

export const Students = new Mongo.Collection("Students");

Students.deny({
    insert(){ return true; },
    update(){ return true; },
    remove(){ return true; }
});

Students.allow({
    insert(){ return false; },
    update(){ return false; },
    remove(){ return false; }
});