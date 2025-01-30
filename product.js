let productId = 1163;
let product_container = document.querySelector(".product_container");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    product_container.innerHTML = `
  <div class="product_image">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" 
                alt="Sahara tshirt">
            </div>

            <div class="product_details">
                <div class="product_info">
                    <h2>Product Information</h2>
                    <p><strong>Model Name: </strong>${data.productdisplayname}</p>
                    <p><strong>Color: </strong>Blue</p>
                    <p><strong>Inventory number: </strong>1163</p>
                </div>

                <div class="brand_info">
                    <h2>Nike</h2>
                    <p>Nike, creating experiences for today's athlete</p>
                     <p><strong>Pris: </strong>${data.price} DKK</p>
                    
                </div>

            </div>

            <div class="purchase_box">
                <h3>Sahara Team India Fanwear Round Neck Jersey</h3>
                <p class="category">${data.category}</p>

                <label for="size">Choose a size</label>
                <select id="size">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                </select>

                <button class="add_to_cart">Add to basket</button>
            </div>
  `;
  });
