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
    return function () {
        content.UpdatePrompts(this, name);
        let prompts = content.GetPrompts(this, 2);
        this.ask(`${_.sample(content.intents[name].answers)} ${_.sample(content.endingPrompts)}`);
    }
}

app.setHandler({
    'LAUNCH': function() {
        let prompts = content.GetPrompts(this, 2);
        this.ask(_.sample(content.welcomes));
    },

    'FavouriteAnimalIntent': buildGenericReponse('FavouriteAnimalIntent'),

    'FavouriteColorIntent': buildGenericReponse('FavouriteColorIntent'),

    'WhereFromIntent': buildGenericReponse('WhereFromIntent'),

    'FavouriteFruitIntent': buildGenericReponse('FavouriteFruitIntent'),

    'SchoolIntent': buildGenericReponse('SchoolIntent'),

    'ProgramIntent': buildGenericReponse('ProgramIntent'),

    'InstagramProfileIntent': buildGenericReponse('InstagramProfileIntent'),

    'InstagramRecentIntent': function() {

    },

    'RandomPhotoIntent': function() {

    },

    'LookLike': function() {

    },

    'HelpIntent': function() {
        let prompts = content.GetPrompts(this, 2);
        this.ask(`${_.sample(content.helpStart)} ${prompts[0]} or ${prompts[1]}`);
    }
});

module.exports.app = app;
