import { Mongo } from "meteor/mongo";

export const Groups = new Mongo.Collection("Groups");

Groups.deny({
    insert(){ return true; },
    update(){ return true; },
    remove(){ return true; }
});

Groups.allow({
    insert(){ return false; },
    update(){ return false; },
    remove(){ return false; }
});