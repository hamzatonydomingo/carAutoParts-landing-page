let productsHTML = document.querySelector('ul.products');

let someProducts = [
    { imgSrc: 'car1.jpg', _name: 'bearing', desc: 'color: silver', price: '$15' },
    { imgSrc: 'car1.jpg', _name: 'bearing', desc: 'size: medium, color: silver, quality: high', price: '$15' },
    { imgSrc: 'car1.jpg', _name: 'bearing', desc: 'size: medium, color: silver, quality: high', price: '$15' },
    { imgSrc: 'car1.jpg', _name: 'bearing', desc: 'size: medium, color: silver, quality: high', price: '$15' },
    { imgSrc: 'car1.jpg', _name: 'bearing', desc: 'size: medium, color: silver, quality: high', price: '$15' },
    { imgSrc: 'car1.jpg', _name: 'bearing', desc: 'size: medium, color: silver, quality: high', price: '$15' },
    { imgSrc: 'car1.jpg', _name: 'bearing', desc: 'color: silver', price: '$15' }
]

function productHTMLModal({ imgSrc, _name, desc, price }) {
    return `
        <li class="product">
            <div class="img">
                <img src="./${imgSrc}">
            </div>
            <strong class="name">${_name}</strong>
            <div class="description">${desc}</div>
            <div class="price">${price}</div>
            <button class="btn">
                <i class="fa fa-shopping-bag"></i>
                buy
            </button>
        </li>`;
}

someProducts.forEach(product => {
    productsHTML.innerHTML += productHTMLModal(product);
});