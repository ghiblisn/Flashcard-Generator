var BasicCard = require('./BasicCard');
var ClozeCard = require('./ClozeCard');
var fs = require("fs");
var inquirer = require('inquirer');

var card ={};

var writeFileCallback = function(err) {
  if (err) {
    console.log(err);
  }

  console.log("File saved!");

};


inquirer.prompt([
  {
    type: "list",
    message: "What type of card do you want?",
    choices: ["Basic Card", "Cloze Card"],
    name: "cardType"
  },

]).then(function(user) {
	console.log(user.cardType);
	if(user.cardType=="Basic Card"){
		inquirer.prompt([
			{
		    type: "input",
		    message: "Please input text for the front of the card: ",
		    name: "cardFront"
  			},
  			{
		    type: "input",
		    message: "Please input text for the back of the card: ",
		    name: "cardBack"
  			}
		]).then(function(user) {
			card = new BasicCard(user.cardFront, user.cardBack);
			// console.log(card.front);
			// console.log(card.back)
			fs.appendFile("logBasic.txt", user.cardFront + ", "+user.cardBack+", ", "utf8", writeFileCallback);
		});
	}
	else if(user.cardType=="Cloze Card"){
		inquirer.prompt([
		  	{
		    type: "input",
		    message: "Please input the full text: ",
		    name: "cardFullText"
  			},
  			{
		    type: "input",
		    message: "Please input the cloze-deleted portion: ",
		    name: "cardCloze"
  			}
		]).then(function(user) {
			card = new ClozeCard(user.cardFullText, user.cardCloze);
			// console.log(card.fullText);
			// console.log(card.cloze);
			// console.log(card.partial);
			fs.appendFile("logCloze.txt", user.cardFullText + ", "+user.cardCloze+", ", "utf8", writeFileCallback);
		});
	}

});


