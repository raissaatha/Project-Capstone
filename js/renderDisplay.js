// Render Display Product
import productDisplay from '../data/display.js';

const displayList = document.querySelector('#display-list');
productDisplay.map((display) => {
    const { name, price, rating, image, link } = display;

    displayList.innerHTML += `
    <div class="col-6 col-sm-4 col-lg-2">
    <a href="${link}" class="product__item">
        <div class="product__item-image">
            <img src="./img/${image}" alt="${name}" />
            <div class="product__item-rating">
                <i class="ri-star-fill"></i>
                ${rating}
            </div>
        </div>
        <div class="product__item-info">
            <p class="product__item-name">${name}</p>
            <p class="product__item-price">${price}</p>
        </div>
    </a>
</div>
    `;
});
