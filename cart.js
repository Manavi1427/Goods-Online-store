document.addEventListener('DOMContentLoaded', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartDiv=document.getElementById("cart");

    const cart_div=document.getElementById("cartItems");
    cart_div.innerhtml='';

    if(cart_div.length===0){
        cart_div.innerhtml='<p>Your cart is empty</p>';
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalDiv = document.createElement('div');
    totalDiv.className="total";
    totalDiv.textContent = `Total: ${total.toFixed(2)}`;
    cartDiv.appendChild(totalDiv);

    function deleteFromCart(id){
      cart = cart.map(item => {
          if (item.id === id) {
              if (item.quantity > 1) {
                  item.quantity--;
              } else {
                  return null; // Mark for deletion
              }
          }
          return item;
      }).filter(item => item !== null);
  
      localStorage.setItem('cart', JSON.stringify(cart));
  }


    //delete from cart function and delete  button
    function renderCart() {
      let cartContainer = document.getElementById('cartItems');
      cartContainer.innerHTML = '';
      cart.forEach(item => {
          let itemElement = document.createElement('div');
          itemElement.className = "cart-row";
          itemElement.textContent = `${item.name} - Rs.${item.price.toFixed(2)} (Quantity: ${item.quantity})`;
          cartContainer.appendChild(itemElement);
  
          let deleteButton = document.createElement('button');
          deleteButton.className = "delete-button";
          deleteButton.textContent = 'Delete';
          deleteButton.onclick = () => {
              deleteFromCart(item.id);
              renderCart();
          };
          itemElement.appendChild(deleteButton);
      });
  }
      
      renderCart();

});
