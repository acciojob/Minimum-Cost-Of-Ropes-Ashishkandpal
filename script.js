//your code here
'use strict';
const arr = document.querySelector('.textInput').value;
arr.sort();
let sum = 0;

const btn = document.querySelector('.submitInput');

//function

function showResult() {
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	document.querySelector('#resutl').textContent = sum;
}

btn.addEventListener('click', showResult);