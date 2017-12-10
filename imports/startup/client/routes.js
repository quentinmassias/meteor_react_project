import React from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';


// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/promotions/list.js';
import '../../ui/pages/students/list.js';
import '../../ui/pages/not-found/not-found.js';


const browserHistory = createBrowserHistory();

// Set up all routes in the app

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <div>
            <Route exact path="/" component={AppContainer}/>
            <Route path="lists/:id" component={ListPageContainer}/>
            <Route path="signin" component={AuthPageSignIn}/>
            <Route path="join" component={AuthPageJoin}/>
            <Route path="*" component={NotFoundPage}/>
        </div>
    </Router>
);

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
