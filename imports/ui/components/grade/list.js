import './list.html';

import { Template } from "meteor/templating";

import { Students } from "/imports/api/students/students";

Template.show_notes.helpers({
    students: function()
    {
        return Students.find();
    }
});