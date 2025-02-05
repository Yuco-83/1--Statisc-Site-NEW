// console.log("index script loaded");
// --------------- List of all categories -------------------------------------------

const allCategories = document.querySelector(".categories-container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
	.then((response) => response.json())
	.then(showCategory);

function showCategory(data) {
	console.log("myCategories:", data);

	const markup = data
		.map(
			(element) =>
				`<a href="./product_list.html?categories=${element.category}"><button type="button">${element.category}</button></a>`
		)
		.join("");
	console.log("min markup er ", markup);
	allCategories.innerHTML = markup;
}

// --------------- List of all brands -------------------------------------------

const allBrands = document.querySelector(".brands-container");

fetch(`https://kea-alt-del.dk/t7/api/brands`)
	.then((response) => response.json())
	.then(showBrands);

function showBrands(data) {
	console.log("myBrands:", data);

	const markup = data
		.map((element) => `<a href="./brands_list.html"><button type="button">${element.brandname}</button></a>`)
		.join("");
	console.log("min markup er ", markup);
	allBrands.innerHTML = markup;
}
