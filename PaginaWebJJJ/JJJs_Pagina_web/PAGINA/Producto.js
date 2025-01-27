let cart = JSON.parse(localStorage.getItem("carrito")) || [];
let cartTotal = 0;

// Calcular el total al cargar la página
cart.forEach(producto => {
    cartTotal += producto.price * producto.quantity;
});

function addToCart(productName, price) {
    const existingProduct = cart.find(item => item.name === productName);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ name: productName, price: price, quantity: 1 });
    }
    cartTotal += price;
    updateCart();
}

function removeFromCart(index) {
    const product = cart[index];
    cartTotal -= product.price * product.quantity;
    cart.splice(index, 1);
    updateCart();
}

function incrementQuantity(index) {
    cart[index].quantity += 1;
    cartTotal += cart[index].price;
    updateCart();
}

function decrementQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        cartTotal -= cart[index].price;
        updateCart();
    } else {
        removeFromCart(index);
    }
}

function updateCart() {
    document.getElementById('cart-count').textContent = cart.length;
    document.getElementById('cart-total').textContent = cartTotal.toFixed(2);

    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)} x ${item.quantity} 
            <button onclick="incrementQuantity(${index})">+</button>
            <button onclick="decrementQuantity(${index})">-</button>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItems.appendChild(li);
    });

    // Guardar el carrito en localStorage
    localStorage.setItem("carrito", JSON.stringify(cart));
}

function toggleCart() {
    const cartDetails = document.getElementById('cart-details');
    cartDetails.classList.toggle('active');
}

// Renderizar el carrito al cargar la página
updateCart();
