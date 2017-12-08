import './create.html';

import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

Template.create_promotion.events({
    "submit #c-promotion" : function(event, template)
    {
        event.preventDefault();
        const promotion = {
            name: template.find('.name').value,
            createdAt: new Date()
        };

        addPromotion(promotion);
    }
});

const addPromotion = (promotion) => {
    Meteor.call('Promotions.methods.insert', promotion, (error) => {
        if (error) {
            alert(error.reason);
        }
    });
};