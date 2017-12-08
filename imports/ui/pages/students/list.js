import './list.html';

import '../../components/student/list.js';

import { Template } from "meteor/templating";
import { Session } from 'meteor/session';

import { Students } from "/imports/api/students/students";

Template.show_students.onCreated(function(){
    const parameters = {
        filters: { promotionId: FlowRouter.getParam("promotion") },
        options: { limit: Session.get('limit') || 2 }
    };

    this.subscribe('students.getByPromotionId', parameters);
});

Template.show_students.helpers({
    students: function()
    {
        return Students.find();
    }
});