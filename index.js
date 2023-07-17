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
function changeBackgroundColor() {
	fetch("https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json")
		.then(response => response.json())
		.then(colorSet => {
			var randomColorIndex = Math.floor(Math.random() * colorSet.length);
			const firstGradientColor = colorSet[randomColorIndex].colors[0];
			const secondGradientColor = colorSet[randomColorIndex].colors[1];
			document.body.style.background = `linear-gradient(${firstGradientColor}, ${secondGradientColor})`
			console.log(firstGradientColor, secondGradientColor);
		});
}
createSuggestionBtnNode.addEventListener('click', function () {
	createSuggestion();
	changeBackgroundColor();
} );
// https://gradients.app/manifest.json
// background: linear-gradient(blue, pink);

// var rand = Math.floor(Math.random() * arr.length);
// alert(arr[rand]);