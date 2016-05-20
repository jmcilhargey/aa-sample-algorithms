// 1. 

var reverseStr = function(str) {

	var newStr = "";
	
	for (var i = str.length - 1; i >= 0; i--) {
		newStr += str[i];
	}
	return newStr;
};

// 2. 

var getFactorial = function(num) {
	
	var totalVal = 1;
	
	for (var i = num; i > 0; i--) {
		totalVal *= i;
	}
	return totalVal;
};

var recursiveFactorial = function(num) {
	
	if (num === 1) {
		return 1;
	}
	
	return num * recursiveFactorial(num - 1);
		
};

// 3. 

var longestWord = function(str) {
	
	var strList = str.split(" ");
	
	var maxLength = 0;
	var maxWord;
	
	strList.forEach(function(word) {
		if (word.length > maxLength) {
			maxLength = word.length;
			maxWord = word;
		}
	});
	return maxWord;
};

// 4. 

var sumNums = function(num) {
	
	if (num === 1) {
		return 1;
	}
	
	return num + sumNums(num - 1);
	
};

// 5. 

var calcHoursMins = function(mins) {
	
	var totalHours = Math.floor(mins / 60);
	var remainingMins = mins % 60;
	
	return totalHours + ":" + remainingMins;
};

// 6. 

var countVowels = function(str) {
	
	var vowelList = ["a", "e", "i", "o", "u"];
	var vowelCount = 0;
	
	for (var i = 0; i < str.length; i++) {
		if (vowelList.indexOf(str[i]) !== -1) {
			vowelCount++;
		}
	}
	return vowelCount;
};

// 7. 

var findZNearby = function(str) {
	
	var aIndex;
	var zIndex;
	var lookForZ;
	var foundZ = false;
	
	for (var i = 0; i < str.length && !foundZ; i++) {
		
		if (str[i] === "a") {
			aIndex = i;
			lookForZ = i + 1;
			
			while (lookForZ <= i + 3 && lookForZ < str.length) {
				
				if (str[lookForZ] === "z") {
					foundZ = true;
				}
				lookForZ++;
			}
		}
	}
	return foundZ;
};

// 8.

var findSumToZero = function(arr) {
	
	var numList = {};
	
	for (var i = 0; i < arr.length; i++) {
		
		if (-arr[i] in numList && arr[i] !== 0) {
			return true;
		} else {
			numList[arr[i]] = true;
		}
	}
	return false;
};

// 9.

var powerOfTwo = function(num) {
	
	var nextValue = 2;
	
	while (nextValue <= num) {
		
		if (nextValue === num) {
			return true;
		}
		
		nextValue *= 2;
	}
	return false;
};

// 10. 

var findThirdGreatest = function(arr) {
	
	var largest = arr[0];
	var second = arr[0];
	var third = arr[0];
	
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] > largest) {
			third = second;
			second = third;
			largest = arr[i];
		} else if (arr[i] > second) {
			third = second;
			second = arr[i];
		} else if (arr[i] > third) {
			third = arr[i];
		}
	}
	return third;
};

// 11. 

var findMostCommonLetter = function(str) {
	
	var letterMap = {};
	
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) in letterMap) {
			letterMap[str.charAt(i)] += 1;
		} else {
			letterMap[str.charAt(i)] = 1;
		}
	}
	
	var maxValue = 0;
	var maxLetter = null;
	
	for (var letter in letterMap) {
		if (letterMap[letter] > maxValue) {
			maxValue = letterMap[letter];
			maxLetter = letter;
		}
	}
	return maxLetter;
};

// 12. 

var findTheOdds = function(str) {
	
	var currNum;
	var numStr = "";
	var prevNum = 0;
	
	for (var i = 0; i < str.length; i++) {
		
		currNum = parseInt(str.charAt(i));
		
		if ((currNum % 2 || prevNum % 2) && i > 0) {
			numStr += "-"
		}
		
		numStr += currNum;
		prevNum = currNum;
	}
	
	return numStr;
};

// 13. 

var capitalizeString = function(str) {
	
	var strArr = str.split(" ");
	
	for (var i = 0; i < strArr.length; i++) {
		
		strArr[i] =  strArr[i][0].toUpperCase() + strArr[i].substr(1);
	}
	return strArr.join(" ");
};

// 14. 

var scrambleString = function(str, arr) {
	
	var newStr = "";
	
	for (var i = 0; i < arr.length; i++) {
		newStr += str.charAt(arr[i]);
	}
	
	return newStr;
};

// 15. 

var checkPrime = function(num) {
	
	for (var i = 2; i < num; i++) {
		if (!(num % i)) {
			return false;
		}
	}
	return true;
	
};

var findNthPrime = function(n) {
	
	var currValue = 1;
	
	while (n > 0) {
		
		currValue++;
		
		if (checkPrime(currValue)) {
			n--;
		}
	}
	return currValue;
};

// 16. 

var isPalindrome = function(str) {
	
	str = str.split(" ").join("");
	
	var startIndex = 0;
	var endIndex = str.length - 1;
	var isPalindrome = true;
	
	while (startIndex < endIndex && isPalindrome) {
		
		if (str[startIndex] !== str[endIndex]) {
			isPalindrome = false;
		}
		startIndex++;
		endIndex--;
	}
	return isPalindrome;
};

var largestPalidrome = function(str) {
	
	var currSlice;
	var maxLength = 0;
	var maxPalindrome = null;
	
	for (var i = 0; i < str.length; i++) {
		for (var j = str.length; j > i; j--) {
			
			currSlice = str.slice(i, j);
			console.log(currSlice);
			if (isPalindrome(currSlice) && j - i > maxLength) {
				maxLength = j - i;
				maxPalindrome = currSlice;
			}
		}
	}
	return maxPalindrome;
};

// 17. 

var countRepeatLetters = function(str) {
	
	var letterMap = {};
	var newStr = str.split(" ").join("");
	
	for (var i = 0; i < newStr.length; i++) {
		
		if (newStr[i] in letterMap) {
			letterMap[newStr[i]]++;
		} else {
			letterMap[newStr[i]] = 1;
		}
	}
	
	var countRepeats = 0;
	
	for (var letter in letterMap) {
		
		if (letterMap[letter] > 1) {
			countRepeats++;
		}
	}
	return countRepeats;
};

// 18. 

var findLargestCommonFactor = function(num1, num2) {
	
	var divisorLimit = Math.min(num1, num2);
	var divisorCount = 1;
	var maxDivisor = null;
	
	while (divisorCount <= divisorLimit) {
		
		if (num1 % divisorCount === 0 && num2 % divisorCount === 0) {
			maxDivisor = divisorCount;
		}
		divisorCount++;
	}
	return maxDivisor;
};

// 19. 

var caesarCipher = function(str, shift) {
	
	var encodedStr = "";
	
	for (var i = 0; i < str.length; i++) {
		
		if (/[a-zA-Z]/.test(str[i])) {
			encodedStr += String.fromCharCode((str.charCodeAt(i) + shift - "a".charCodeAt()) % 26 + "a".charCodeAt());
		} else {
			encodedStr += str[i];
		}
	}
	return encodedStr;
};
