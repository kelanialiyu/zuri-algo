'use strict';
function convertFahrToCelsius(input_in_F){
	var result;

	if(isNaN(input_in_F)) {

		var type = typeof  input_in_F;

		if(Array.isArray(input_in_F)){
			type = "array";

		}
		result = `${JSON.stringify(input_in_F)} is not a valid number but ${ get_article(type) } ${type}.`;
	}
	else{
		result = (input_in_F -32) *5/9	
	}
	
	return result;
}

function is_vowel(word){
	var first_letter = word.trim().charAt(0).toLowerCase();
	return (first_letter == "a" || first_letter == "e" || first_letter == "i" || first_letter == "o" || first_letter == "u");

}

function get_article(word){
	var result;
	if(is_vowel(word)){
		result = "an";
	}
	else{
		result = "a";
	}
	return result;
}