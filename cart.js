document.addEventListener('DOMContentLoaded', function() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cart_div=document.getElementById("cart");
    cart_div.innerhtml='';

    if(cart.length===0){
        cart_div.innerhtml='<p>Your cart is empty</p>';
        return;
    }

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalDiv = document.createElement('div');
    totalDiv.className="total";
    totalDiv.textContent = `Total: ${total.toFixed(2)}`;
    cart_div.appendChild(totalDiv);

    //delete from cart function and delete  button
    function renderCart() {
        let cartContainer = document.getElementById('cartItems');
        cartContainer.innerHTML = '';
        cart.forEach(item => {
          let itemElement = document.createElement('div');
          itemElement.className="cart-row";
          itemElement.textContent = `${item.name} (Quantity: ${item.quantity})`;
          cartContainer.appendChild(itemElement);
      
          let deleteButton = document.createElement('button');
          deleteButton.className="delete-button"
          deleteButton.textContent = 'Delete';
          deleteButton.onclick = () => {
            deleteCartItem(item.id);
            renderCart();
          };
          itemElement.appendChild(deleteButton);
        });
      }
      
      renderCart();
      


});
