// Render All Products
import productAudio from '../data/audio.js';
import productStorage from '../data/storage.js';
import productDisplay from '../data/display.js';
import productKeyboard from '../data/keyboard.js';

const allProducts = [...productAudio, ...productDisplay, ...productKeyboard, ...productStorage];

const recommendedList = document.querySelector('#recommended-list');
const popularList = document.querySelector('#popular-list');
const randomProducts = allProducts.sort(() => Math.random() - 0.5);

allProducts.map((product) => {
    const { name, price, rating, image, link } = product;

    if (rating === '5.0' && recommendedList.childElementCount < 6) {
        recommendedList.innerHTML += `
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
    }
});

randomProducts.map((product) => {
    const { name, price, rating, image, link } = product;

    if (popularList.childElementCount < 18) {
        popularList.innerHTML += `
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
    }
});
