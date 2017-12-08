import { Mongo } from "meteor/mongo";

export const Promotions = new Mongo.Collection("Promotions");

Promotions.deny({
    insert(){ return true; },
    update(){ return true; },
    remove(){ return true; }
});

Promotions.allow({
    insert(){ return false; },
    update(){ return false; },
    remove(){ return false; }
});