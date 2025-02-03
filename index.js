const listContainer = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(categories) {
  const markup = categories
    .map(
      (category) => `
    <a href="productlist.html" class="category_box">${category.category}</a>
    `
    )
    .join("");
  listContainer.innerHTML = markup;
}
