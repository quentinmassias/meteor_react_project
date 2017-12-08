import './show.html';

import { Template } from "meteor/templating";
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Promotions } from "/imports/api/promotions/promotions";
import { Students } from "/imports/api/students/students";

Template.promotions_show.onCreated(function(){
    const promotionId = FlowRouter.getParam("id");

    this.subscribe('promotions.getById', promotionId);
    this.subscribe('students.getByPromotionId', promotionId);
});

Template.promotions_show.helpers({
    promotion: function()
    {
        return Promotions.find();
    },
    students: function()
    {
        return Students.find();
    }
});