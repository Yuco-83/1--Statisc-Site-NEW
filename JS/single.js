// --- Link til produktet (En HURTIGERE måde at FETCH på)

const productId = 1163;
const productContainer = document.querySelector(".single-product-container");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
	.then((response) => response.json())
	.then((data) => {
		productContainer.innerHTML = `
               <section class="single-product-container">
				<article class="product-img">
					<img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="Sahara Team India Fanwear Round Neck Jersey" />
				</article>
				<article class="product-info">
					<h3 class="pi title">PRODUCT INFO</h3>
					<dl class="info-list">
						<dt>Product name:</dt>
						<dd class="name">${data.productdisplayname}</dd>
						<dt>Color:</dt>
						<dd class="color">${data.basecolour}</dd>
						<dt>Inventory number:</dt>
						<dd class="id-number">${data.id}</dd>
					</dl>
					<article class="product-slogan">
						<h5>${data.brandname}</h5>
						<p>${data.brandbio}</p>
					</article>
				</article>
				<article class="purchase-box">
					<h5 class="model-name">${data.productdisplayname}</h5>
					<div class="prod-categories">
						<p class="type">${data.articletype}</p>
						<span class="separator">|</span>
						<p class="brand">${data.brandname}</p>
					</div>
					<div class="price">
						${data.price}
<<<<<<< HEAD
						<span>  DKK</span>
=======
						<span> DKK</span>
>>>>>>> 6ccab557f64a733e28b53ab16c5d7ffa7f2ae4fa
					</div>
					<div class="sizes">
						<form class="sizes-form">
							<h6>Size:</h6>
							<div class="select-size">
								<label for="sm">
									<input type="radio" name="size" id="sm" />
									<span>S</span>
								</label>
								<label for="m">
									<input type="radio" name="size" id="m" />
									<span>M</span>
								</label>
								<label for="l">
									<input type="radio" name="size" id="l" />
									<span>L</span>
								</label>
								<label for="xl">
									<input type="radio" name="size" id="xl" />
									<span>XL</span>
								</label>
								<label for="xxl">
									<input type="radio" name="size" id="xxl" />
									<span>XXL</span>
								</label>
							</div>
						</form>
					</div>
					<div class="quantity">
						<div class="select-quantity">
							<h6>Quantity:</h6>
							<input type="number" name="quantity" value="1" />
						</div>
					</div>
					<div>
						<div class="sub-btn">
							<button type="submit" class="submit">Add to cart</button>
						</div>
					</div>
				</article>
			</section>
          `;
	});

/*
// --- Link til produktet ---
https://kea-alt-del.dk/t7/api/products/1163
{
  "id": 1163,
  "gender": "Men",
  "category": "Apparel",
  "subcategory": "Topwear",
  "articletype": "Tshirts",
  "basecolour": "Blue",
  "season": "Summer",
  "productionyear": 2011,
  "usagetype": "Sports",
  "productdisplayname": "Sahara Team India Fanwear Round Neck Jersey",
  "parsed": 1,
  "soldout": 0,
  "relid": 1163,
  "price": 895,
  "discount": null,
  "variantname": "Roundneck Jersey",
  "brandname": "Nike",
  "brandbio": "Nike, creating experiences for today’s athlete",
  "brandimage": "http://assets.myntassets.com/v1/assets/banners/2015/6/26/1435317851398-23197-3chxv6.jpg",
  "agegroup": "Adults-Men",
  "colour1": "NA",
  "colour2": "NA",
  "fashiontype": "Fashion",
  "materialcaredesc": "\u003Cp\u003E100% polyester\u003Cbr\u003EMachine wash\u003C/p\u003E",
  "sizefitdesc": null,
  "description": "\u003Cp\u003EBlue round neck Sahara Team India jersey, has short sleeves, print on the chest and back chest\u003Cbr\u003E\u003Cbr\u003EWarranty for manufacturing defects: 6 months (not valid on products with more than 20% discount)\u003Cbr\u003E\u003C/p\u003E",
  "styledesc": "\u003Cp\u003ECheer for the Indian cricket team on and off the fields in this blue polo neck jersey from Nike. "
}
*/
