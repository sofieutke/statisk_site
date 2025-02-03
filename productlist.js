const product_list_container = document.querySelector(".product_list_container");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map(
      (product) => `
         <article class="product_card">
                <a href="product.html">
                    <div class="product_image">
                        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="${product.productdisplayname}">
                    </div>
                    <div class="product_info">
                        <h2>${product.productdisplayname}</h2>
                        <p class="category">${product.articletype}</p>
                        <p class="price">${product.price} DKK</p>
                        <p class="read_more">Read More</p>
                    </div>
                </a>
        </article>
    `
    )
    .join("");
  product_list_container.innerHTML = markup;
}
