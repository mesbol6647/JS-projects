// Alışveriş sepeti verilerini depolamak için bir dizi kullanalım
const cart = [];

// Sepete ürün eklemek için bir işlev
function addToCart(productName, price) {
  cart.push({ productName, price });
}

// Sepet içeriğini güncellemek ve toplam fiyatı hesaplamak için bir işlev
function updateCart() {
  let totalPrice = 0;

  // Sepet içeriğini HTML'e ekle
  const cartContainer = document.getElementById('product-painel');
  cartContainer.innerHTML = '';

  for (const item of cart) {
    const productHTML = document.createElement('div');
    productHTML.classList.add('main__product');

    // Ürün adı
    const productName = document.createElement('h2');
    productName.classList.add('main__product-info--title');
    productName.innerText = item.productName;
    productHTML.appendChild(productName);

    // Ürün fiyatı
    const productPrice = document.createElement('div');
    productPrice.classList.add('main__product-price');
    const productPriceText = document.createElement('p');
    productPriceText.classList.add('main__product-price--text');
    productPriceText.innerHTML = `<strong class="dollar">${item.price}</strong>`;
    productPrice.appendChild(productPriceText);
    productHTML.appendChild(productPrice);

    cartContainer.appendChild(productHTML);

    // Toplam fiyatı güncelle
    totalPrice += item.price;
  }

  // Toplam fiyatı göster
  const totalInfo = document.getElementById('total-info');
  totalInfo.innerHTML = `
    <div class="main__summary--info">
      <span>Total</span>
      <span class="dollar">${totalPrice.toFixed(2)}</span>
    </div>
  `;
}

// // Sepeti güncelleyin ve başlangıçta sepeti boşaltın
// updateCart();

// // Ürünleri sepete eklemek için örnek kullanım:
// addToCart('Macbook M2 Air', 1474.99);
// addToCart('Apple Keyboard', 185.99);
// addToCart('Apple Mouse', 89.99);

// // Sepeti güncelleyin ve toplam fiyatı hesaplayın
// updateCart();
