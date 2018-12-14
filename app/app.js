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

let buildGenericReponse = (name) =>  {
    return function (name) {
        content.UpdatePrompts(this, name);
        let prompts = content.GetPrompts(this, 2);
        this.ask(`${_.sample(content.intents[name].answers)}. ${_.sample(content.transitions)} ${prompts[0]} or ${prompts[1]}`);
    }
}

app.setHandler({
    'LAUNCH': function() {
        let prompts = content.GetPrompts(this, 2);
        this.ask(_.sample(content.welcomes));
    },

    'FavouriteAnimalIntent': function() {
        content.UpdatePrompts(this, "FavouriteAnimalIntent");
        let prompts = content.GetPrompts(this, 2);
        this.ask(`${_.sample(content.intents.FavouriteAnimalIntent.answers)}. ${_.sample(content.transitions)} ${prompts[0]} or ${prompts[1]}`);
    },

    'FavouriteColorIntent': buildGenericReponse('FavouriteColorIntent'),

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

    'HelpIntent': function() {
        let prompts = content.GetPrompts(this, 2);
        this.ask(`${_.sample(content.helpStart)} ${_.sample(content.transitions)} ${prompts[0]} or ${prompts[1]}`);
    }
});

module.exports.app = app;
