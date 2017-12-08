import './create.html';

import { Meteor } from 'meteor/meteor'
import { Template } from "meteor/templating";
import { Session } from 'meteor/session'
import { Tracker } from 'meteor/tracker';

import { Students } from "/imports/api/students/students";
import { Promotions } from "/imports/api/promotions/promotions";
import { Assignments } from "/imports/api/assignments/assignments";

Template.create_grades.onCreated(function(){
    this.subscribe('promotions.all');

    Tracker.autorun(() => {
        this.subscribe('students.getByPromotionId', Session.get('promotion'));
        this.subscribe('assignments.promotion', Session.get('promotion'));
    });
});

Template.create_grades.helpers({
    students: function()
    {
        return Students.find();
    },
    promotions: function()
    {
        return Promotions.find()
    },
    assignments: function()
    {
        return Assignments.find();
    }
});

Template.create_grades.events({
    "submit #c-grade" : function(event, template)
    {
        event.preventDefault();
        
        const students = template.find('.student');
        let count = 0;
        
        for(var student of students)
        {
            if(student.find('.grade').value)
            {
                const grade = {
                    value: student.find('.grade').value,
                    assignmentId: template.find('.assignment').value,
                    studentId: student.getAttribute('data-student'),
                    createdAt: new Date()
                };

                addGrade(grade);
                count++;
            }
        }

        if(count)
            alert("Ajout de " + count + " notes");
    },
    "change .promotion" : function(event, template)
    {
        event.preventDefault();

        Session.set('promotion', template.find('.promotion').value);
    }
});

const addGrade = (grade) => {
    Meteor.call('Grades.methods.insert', grade, (error) => {
        if (error) {
            alert(error.reason);
        }
    });
};