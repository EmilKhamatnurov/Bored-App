const suggestionOutputNode = document.querySelector('#suggestionOutput');
const createSuggestionBtnNode = document.querySelector('#createSuggestionBtn');

createSuggestionBtnNode.addEventListener('click', createSuggestion)
function createSuggestion() {
	fetch('http://www.boredapi.com/api/activity/')
	.then(request => request.json())
	.then(suggestion => {suggestionOutputNode.innerText = suggestion.activity});
}