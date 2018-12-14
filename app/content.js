const _ = require('lodash');

class Content {
    constructor() {
        this.welcomes = [
            "Welcome to Andrew's voice assistant. What would you like to know? You can always say help to hear possible questions."
        ]
    
        this.helpStart = [
            "You can ask ",
            "Try asking "
        ];

        this.endingPrompts = [
            "Ask something else.",
            "What else would you like to know.",
            "Good question, hit me with another one.",
            "Ask another question",
            "What else would you like to know?",
            "What other Andrew facts would you like to know?",
            "What other Andrew facts would you like to know? Remeber you can always to say help to hear questions you've yet to ask.",
            "Good question! Remeber you can always ask what questions you've yet to ask."
        ]
    
        this.intents = {
            FavouriteColorIntent: {
                prompts: ["What is Andrew's favourite colour?"],
                answers: ["Blue", "Only the best colour ever. Blue!", "Gotta be blue", "The best colour ever. Blue", "Either blue, azul or bleu"]
            },
            WhereFromIntent: {
                prompts: ["Where is Andrew from?"],
                answers: ["British Columbia Canada, or the best place ever!", "Beautfiul British Columbia"]
            },
            FavouriteAnimalIntent: {
                prompts: ["What is Andrew's favourite animal?"],
                answers: ['The Honey Badger of course!', "Honey Badger.", "The magestic Honey Badger."]
            },
            FavouriteFruitIntent: {
                prompts: ["What is Andrew's favourite fruit?"],
                answers: ["Any apple except Red Delicous", "Gala Apples", "Apples", "Fourteen and half apples", "Two apples and three quarters of a pineapple"]
            },
            SchoolIntent: {
                prompts: ["Where does Andrew go to school?", "Where does Andrew study?", "Where does Andrew go to university?"],
                answers: ["The Univeresity of Waterloo"]
            },
            ProgramIntent: {
                prompts: ["What is Andrew's major?", "What program is Andrew in?", "What is Andrew Studying?"],
                answers: ["Andrew is studying Computer Science at the University of Waterloo.", "Andrew is studying Computer Science"] 
            },
            InstagramProfileIntent: {
                prompts: ["What is Andrew's Instagram?"],
                answers: ["Andrew's instagram handle is andrew_gamble", "andrew_gamble"]
            },
            InstagramRecentIntent: {
                prompts: ["What's Andrew's most recent instagram photo"],
                answers: ["Here is a beautfiul picuture.", "Wow look at the beauty.", "Abosuetly gorgeous", "Now that's stunning", "Wow my eyes have never felt so good"]
            },
            RandomPhotoIntent: {
                prompts: ["Show me one of Andrew's pictures."],
                answers: ["Here you go.", "Beautiful."]
            }
        }  
    }

    GetPrompts(app, n) {
        let avalible = app.getSessionAttribute("avalible") || [];
        if (avalible.length < n) {
            avalible = Object.keys(this.intents);
            app.setSessionAttribute("avalible", avalible);
        }
        let keys = _.sampleSize(avalible, n);    
        return keys.reduce((acc, current) => { 
            console.log(acc);
            acc.push(_.sample(this.intents[current].prompts))
            return acc}, []);
    }

    UpdatePrompts(app, used) {
        let avalible = app.getSessionAttribute("avalible") || [];
        _.remove(avalible, prompt => prompt === used);
        if (avalible.length === 0) {
            avalible = Object.keys(this.intents);
        }
        app.setSessionAttribute("avalible", avalible);
    }
    
}

module.exports = new Content();