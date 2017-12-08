import './create.html';

import { Meteor } from "meteor/meteor";
import { Template } from "meteor/templating";

import { Students } from "/imports/api/students/students";
import { Promotions } from "/imports/api/promotions/promotions";

Template.create_student.onCreated(function(){
    this.subscribe('promotions.all');
});

Template.create_student.helpers({
    promotions: function()
    {
        return Promotions.find();
    }
});

Template.create_student.events({
    "submit #c-student" : function(event, template)
    {
        event.preventDefault();
        const student = {
            firstName: template.find(".first-name").value,
            lastName: template.find(".last-name").value,
            promotionId: template.find(".promotion").value,
            createdAt: new Date()
        };

        addStudent(student);
    }
});

const addStudent = (student) => {
    Meteor.call('Students.methods.insert', student, (error) => {
        if (error) {
            alert(error.reason);
        }
    });
};

