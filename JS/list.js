// ------------ TIL DINAMISK SITE -------------

const productListContainer = document.querySelector(".product-list-container");
const categories = new URLSearchParams(window.location.search).get("categories");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${categories}`)
	.then((response) => response.json())
	.then((dataOfPorducts) => showList(dataOfPorducts));

function showList(products) {
	const markup = products
		.map(
			(product) =>
				`<article class="product onSale">
                    	<div class="sold-out">${product.soldout}</div>
					<img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
					<h6 class="product_name">${product.productdisplayname}</h6>
					<div class="prod-categories">
						<p class="type">${product.articletype}</p>
						<p class="separator">|</p>
						<p class="brand">${product.brandname}</p>
					</div>
					<div class="price">
						<p class="price">
							<span>DKK </span>
								${product.price}
						</p>
						<div class="discount">
							<p class="discount-price">DKK <span>${Math.floor((product.price * product.discount) / 100)}</span></p>
							<p class="discount-percent">-${product.discount}%</p>
						</div>
					</div>
					<a class="product" href="single_product.html?productid=${product.id}">Read More</a>
				</article>`
		)
		.join("");
	productListContainer.innerHTML = markup;
}

// THIS ONE WORKS TOO, BUT THE 1. ONE ITS SMARTER -----------------------------------
// const categories = new URLSearchParams(window.location.search).get(category);
// const productListContainer = document.querySelector(".product-list-container");

// fetch(`https://kea-alt-del.dk/t7/api/products?category=${categories}`)
// 	.then((response) => response.json())
// 	.then((dataOfPorducts) => showList(dataOfPorducts));
// {
// 	function showList(products) {
// 		console.log(products);
// 		let markup = "";
// 		products
// 			.map((product) => {
// 				markup += `<article class="product onSale">
//                     <div class="sold-out">${product.soldout}</div>
// 				<img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
// 				<h6 class="product_name">${product.productdisplayname}</h6>
// 				<div class="prod-categories">
// 					<p class="type">${product.articletype}</p>
// 					<p class="separator">|</p>
// 					<p class="brand">${product.brandname}</p>
// 				</div>
// 				<div class="price">
// 					<p class="price">${product.price}</p>
// 					<div class="discount">
// 						<p class="discount_price">${product.discount}</p>
// 						<p class="discount-percent">-34%</p>
// 					</div>
// 				</div>
// 				<a class="product" href="./single_product.html">
// 				Read More
// 				</a>
// 				</article>`;
// 			})
// 			.join("");
// 		console.log(markup);
// 		productListContainer.innerHTML = markup;
// 	}
// }

// <a class="product" href="./product${product.id}.html">

//  --------------------------- UNA PRUEVA -------------------------------
// const productId = 1163;
// const productListContainer = document.querySelector(".product-list-container");

// fetch(`https://kea-alt-del.dk/t7/api/products/`)
// 	.then((response) => response.json())
// 	.then((products) => {
// 		const markup = products.map(
// 			(product) =>
// 				`<article class="product onSale">
//                     <div class="sold-out">${product.soldout}</div>
// 				<img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}" />
// 				<h6 class="product_name">${product.productdisplayname}</h6>
// 				<div class="prod-categories">
// 					<p class="type">${product.articletype}</p>
// 					<p class="separator">|</p>
// 					<p class="brand">${product.brandname}</p>
// 				</div>
// 				<div class="price">
// 					<p class="price">${product.price}</p>
// 					<div class="discount">
// 						<p class="discount_price">${product.discount}</p>
// 						<p class="discount-percent">34%</p>
// 					</div>
// 				</div>
// 				<a class="product" href="./single_product.html">
// 				Read More
// 				</a>
// 				</article>`
// 		);
// 	})
// 	.join("");
// console.log(markup);
// productListContainer.innerHTML = markup;
