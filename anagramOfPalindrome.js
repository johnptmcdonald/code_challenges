function anagramOfPalindrome(str){
	// make an empty alphabet object
	var alphabet = {}
	// make a variable that counts the number of letters that have an odd count
	var numberOfOdds = 0
	
	// loop through the string. 
	
	for(var i = 0; i < str.length; i++){
		// If the alphabet object doesn't have a key with that letter
		// make one and set the value to 1 (the count of that letter)
		if(alphabet[str[i]] === undefined){
			alphabet[str[i]] = 1
		} else {
			// else, that letter already exists in the alphabet
			// so just add one to its count
			alphabet[str[i]] +=1
		}
	}

	// loop through the alphabet object properties
	for(prop in alphabet){
		if(alphabet.hasOwnProperty(prop)){
			// if the count for each letter is odd
			// increase the numberOfOdds global variable
			if(alphabet[prop] % 2 !== 0){
				numberOfOdds++
			}
		}
	}

	// if there is more than one odd letter count, return false
	return numberOfOdds > 1 ? false : true
}

anagramOfPalindrome("catat")

