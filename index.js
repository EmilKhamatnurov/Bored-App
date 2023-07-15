const suggestionOutputNode = document.querySelector('#suggestionOutput');
const createSuggestionBtnNode = document.querySelector('#createSuggestionBtn');
const requestURL = 'https://www.boredapi.com/api/activity/';

function createSuggestion() {
	fetch(requestURL)
		.then(response => response.json())
		.then(suggest => {suggestionOutputNode.innerText = suggest.activity})
		.catch(error => console.error("Something went wrong"))
}

createSuggestionBtnNode.addEventListener('click', createSuggestion);