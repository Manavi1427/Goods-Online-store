document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    window.addToCart = function(id, name, price) {
        alert("Item added to the cart")
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            const newItem = { id, name, price, quantity: 1 };
            cart.push(newItem);
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        //SessionStorage-> the data is stored till the website runs in the browser and deletes after.
        //localStorage-> the data is stored permantely and is stored even after the browser is closed.
    };
    
});