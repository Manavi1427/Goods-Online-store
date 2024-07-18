document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    window.addToCart = function(id, name, price) {
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            const newItem = { id, name, price, quantity: 1 };
            cart.push(newItem);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    };
    window.deleteFromCart=function(id){
        let cartItems = JSON.parse(localStorage.getItem('cart'));
        cartItems = cartItems.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(cartItems));
}
});