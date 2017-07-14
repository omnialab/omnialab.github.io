document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#splash span').addEventListener('click', function() {
		document.querySelector('#content').scrollIntoView();
	}, false);
}, false);