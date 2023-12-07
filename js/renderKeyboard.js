// Render Keyboard Product
import productKeyboard from '../data/keyboard.js';

const keyboardList = document.querySelector('#keyboard-list');
productKeyboard.map((keyboard) => {
    const { name, price, rating, image, link } = keyboard;

    keyboardList.innerHTML += `
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
