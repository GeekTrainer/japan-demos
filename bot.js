"use strict";

const builder = require("botbuilder");
const dialog = require("./dialogs/echo");
const bot = new builder.UniversalBot(
    new builder.ChatConnector({
        appId: process.env.MICROSOFT_APP_ID,
        appPassword: process.env.MICROSOFT_APP_PASSWORD
    }), 
    dialog.waterfall
);


module.exports = bot;
