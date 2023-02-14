//your code here
'use strict';
const arr = document.querySelector('.textInput').value;
arr.sort();
let sum = 0;

const btn = document.querySelector('.submitInput');

//function
let ans = 0;
function showResult() {
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
		ans += sum;
	}
	document.querySelector('#resutl').textContent = ans;
	console.log(ans);
}

btn.addEventListener('click', showResult);