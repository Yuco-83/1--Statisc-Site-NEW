// console.log("index script loaded");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
	.then((response) => response.json())
	.then(showCategory);

function showCategory(data) {
	console.log("myCategories:", data);

	const markup = data
		.map((element) => `<a href="./product_list.html"><button type="button">${element.category}</button></a>`)
		.join("");
	console.log("min markup er ", markup);
	document.querySelector("section").innerHTML = markup;
}
