import { Meteor } from "meteor/meteor";
import { Promotions } from "./promotions";
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const insertPromotion = new ValidatedMethod({
    name: 'Promotions.methods.insert',
    validate: new SimpleSchema({
        name: { type: String },
        createdAt: { type: Date }
    }).validator(),
    run(promotion) {
        Promotions.insert(promotion);
    }
});
