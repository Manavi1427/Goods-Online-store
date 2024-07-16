document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cart_div=document.getElementById("cart");
    cart_div.innerhtml='';

    if(cart.length===0){
        cart_div.innerhtml='<p>Your cart is empty</p>';
        return;
    }
    const ul = document.createElement('ul');
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rs.${item.price.toFixed(2)} x ${item.quantity}`;
        ul.appendChild(li);
    });
    cart_div.appendChild(ul);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalDiv = document.createElement('div.total');
    totalDiv.textContent = `Total: ${total.toFixed(2)}`;
    cart_div.appendChild(totalDiv);
});
