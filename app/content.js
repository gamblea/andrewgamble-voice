const _ = require('lodash');

module.exports = {
    welcomes: [
        "Welcome to Andrew's voice assistant. What would you like to know?"
    ],
    transitions: [
        "Ask: ", "", ""
    ],
    intents: {
        favouriteColor: {
            prompts: ["What is Andrew's favourite colour?"],
            answers: ["Blue", "Only the best colour ever. Blue!", "Gotta be blue", "The best colour ever. Blue", "Either blue, azul or bleu"]
        },
        whereFrom: {
            prompts: ["Where is Andrew from?"],
            answers: ["British Columbia Canada, or the best place ever!", "Beautfiul British Columbia"]
        },
        favouiteAnimal : {
            prompts: ["What is Andrew's favourite animal?"],
            answers: ['The Honey Badger of course!', "Honey Badger", "The magestic Honey Badger"]
        },
        favouriteFruit: {
            prompts: ["What is Andrew's favourite fruit?"],
            answers: ["Any apple except Red Delicous", "Gala Apples", "Apples", "Fourteen and half apples", "Two apples and three quarters of a pineapple"]
        },
        schoolIntent: {
            prompts: ["Where does Andrew go to school?", "Where does Andrew study?", "Where does Andrew go to university?"],
            answers: ["The Univeresity of Waterloo"]
        },
        programIntent: {
            prompts: ["What is Andrew's major?", "What program is Andrew in?", "What is Andrew Studying?"],
            answers: ["Andrew is studying Computer Science at the University of Waterloo.", "Andrew is studying Computer Science"] 
        },
        instagramProfileIntent: {
            prompts: ["What is Andrew's Instagram?"],
            answers: ["Andrew's instagram handle is andrew_gamble", "andrew_gamble"]
        },
        instagramRecentIntent: {
            prompts: ["What's Andrew's most recent instagram photo"],
            answers: ["Here is a beautfiul picuture.", "Wow look at the beauty.", "Abosuetly gorgeous", "Now that's stunning", "Wow my eyes have never felt so good"]
        },
        randomPhotoIntent: {
            prompts: ["Show me one of Andrew's pictures."],
            answers: ["Here you go.", "Beautiful."]
        }

    },
    GetPrompts(app, n) {
        const avalible = app.getSessionAttribute("avalible");
        if (avalible.length < n) {
            avalible = this.intents.keys();
            app.setSessionAttribute("avalible", avalible);
        }
        let keys = _.sampleSize(avalible, n);    
        return keys.reduce((acc, current) => {acc.push(_.sample(this.intents[current].prompts))}, []);
    },
    UpdatePrompts(app, used) {
        const avalible = app.getSessionAttribute("avalible");
        _.remove(avalible, prompt => prompt === used);
        if (avalible.length === 0) {
            avalible = this.intents.keys();
        }
        app.setSessionAttribute("avalible", avalible);
    },
}