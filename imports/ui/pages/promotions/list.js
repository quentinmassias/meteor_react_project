import './list.html';

import { Promotions } from "/imports/api/promotions/promotions";

Template.promotions_list_page.onCreated(function(){
    this.subscribe('promotions.all');
});

Template.promotions_list_page.helpers({
    promotions: function()
    {
        return Promotions.find();
    }
});