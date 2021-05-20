'use strict';

// Question 1
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

// Question 2
function checkYuGiOh(n){
	var result
	if(isNaN(n)){
		result =`invalid parameter: ${n}`;
	}
	else{
		var result = new Array(n);
		for (var i = 0; i < n; i++) {
			result[i] = i+1;
			if((i+1)%2==0){
				result[i]="yu"
			}
			if((i+1)%3==0){
				if(isNaN(result[i])){
					result[i]+="-gi";
				}
				else{
					result[i]="gi"
				}
			}
			if((i+1)%5==0){
				if(isNaN(result[i])){
					result[i]+="-oh";
				}
				else{
					result[i]="oh"
				}
			}
		}
	}
	return result;
}





















// ************helper functions*************************
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