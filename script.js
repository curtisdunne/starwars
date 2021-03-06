var _ = require('lodash');

// test only....
var array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));

const displayPersonalInfoFromData = (data) => {
	const nameLabel = document.getElementById("nameLabel");
	const heightLabel = document.getElementById("heightLabel");
	const hairColorLabel = document.getElementById("hairColorLabel");
	const skinColorLabel = document.getElementById("skinColorLabel");
	const genderLabel = document.getElementById("genderLabel");

	nameLabel.textContent = data.name;
	genderLabel.textContent = data.gender;

	heightLabel.textContent = data.height + ' inches';
	hairColorLabel.textContent = data.hair_color;
	skinColorLabel.textContent = data.skin_color;
}

async function fetchUsers() {
	const response = await fetch('https://swapi.co/api/people/1/');
	const data = await response.json();
	console.log(data);

	displayPersonalInfoFromData(data);
}

fetchUsers();
