
var ClozeCard = function(text, cloze){
	this.cloze = cloze;
	this.partial = text.replace(cloze, ".....");;
	this.fullText = text;
	this.err = function(){
		if(!this.fullText.includes(this.cloze)){
			console.log("Cloze is not in full text!");
		}
	}
}

module.exports = ClozeCard;
