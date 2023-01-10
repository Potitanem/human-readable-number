module.exports = function toReadable(number) {
	let numOfOnes = ['', 'one','two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
	'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
	'seventeen', 'eighteen', 'nineteen'];
	let tenths = ['','','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
	'ninety'];
	let numberStr = String(number);
	if(number == 0){
		return 'zero';
	}
	if (number < 20){
		return numOfOnes[number];
	}
	if (numberStr.length == 2){
		if(numberStr[1] == '0'){
			return tenths[numberStr[0]];
		} else
				return tenths[numberStr[0]] + ' ' + numOfOnes[numberStr[1]];
	}
	if(numberStr.length == 3){
		if(numberStr[1] == '0' && numberStr[2] == '0'){
			return numOfOnes[numberStr[0]] + ' hundred';
		}
		else
			return numOfOnes[numberStr[0]] + ' hundred ' + toReadable(+(numberStr[1] + numberStr[2]));
	}
}
