const suggestionOutputNode = document.querySelector('#suggestionOutput');
const createSuggestionBtnNode = document.querySelector('#createSuggestionBtn');
const subtitleNode = document.querySelector('#subtitle');
const requestURL = 'https://www.boredapi.com/api/activity/';


function createSuggestion() {
	fetch(requestURL)
		.then(response => response.json())
		.then(suggest => {
			subtitleNode.innerText = "Теперь не скучно!"
			suggestionOutputNode.innerText = suggest.activity
		})
		.catch(() => console.error("Something went wrong"))
}

createSuggestionBtnNode.addEventListener('click', createSuggestion);
