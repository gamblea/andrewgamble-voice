'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');
const content = require('./content');
const _ = require('lodash');

const config = {
    logging: true,
};
const app = new App(config);


// =================================================================================
// App Logic
// =================================================================================

app.setHandler({
    'LAUNCH': function() {
        let prompts = content.GetPrompts(this, 2);
        this.ask([_.sample(content.welcomes), "Try asking: ", prompts[0], "Or", prompts[1]].join(' '));
    },

    'FavouriteAnimalIntent': function() {
        let prompts = content.GetPrompts(this, 2);
    },

    'FavouriteColorIntent': function() {

    },

    'WhereFromIntent': function() {

    },

    'FavouriteFruitIntent': function() {

    },

    'SchoolIntent': function() {

    },

    'ProgramIntent': function() {

    },

    'InstagramProfileIntent': function() {

    },

    'InstagramRecentIntent': function() {

    },

    'RandomPhotoIntent': function() {

    },

    'LookLike': function() {

    },

    'MyNameIsIntent': function(name) {
        this.tell('Hey ' + name.value + ', nice to meet you!');
    },
});

module.exports.app = app;
