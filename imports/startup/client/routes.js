import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/promotions/list.js';
import '../../ui/pages/students/list.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', { main: 'App_home' });
    },
});

FlowRouter.route('/students/list/:promotion', {
    name: 'Students.show',
    action() {
        BlazeLayout.render('App_body', { main: 'show_students_page' });
    },
});

FlowRouter.route('/promotions', {
    name: 'Promotions.list',
    action() {
        BlazeLayout.render('App_body', { main: 'promotions_list_page' });
    },
});

FlowRouter.notFound = {
    action() {
        BlazeLayout.render('App_body', { main: 'App_notFound' });
    },
};
