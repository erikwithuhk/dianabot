//require('dotenv').config();

var request = require('request');
var slackbot = require('./slackbot-new');
var fs = require('fs');

//var botKey = process.env.SLACK_BOT_KEY;
var botKey = 'xoxb-109317866545-WxcbGUk9s8kHnb4nkXq1ktu1'
//var taIDs = process.env.SLACK_USER_IDS.split(',');
var taIDs = 'U1N52M23G,U35RL5H43'.split(',')


var bot = new slackbot(botKey);

var askrafiki = require('./core-bot-functions')(bot, taIDs);
var easterEggs = require('./easter-eggs')(bot, taIDs);

bot.use(askrafiki);

for (var key in easterEggs) {
	bot.use(easterEggs[key]);
}

bot.connect();
