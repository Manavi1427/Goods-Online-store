let cart=[]
function addToCart(id,name,price){
    let existing_item=cart.find(item=>item.id===id);
    //if the item already exists, increase the quatity
    if(existing_item){                          
        existing_item+=1;
    }
    //if the item doesnt exist, add the item
    else{
        const newItem = { id, name, price, quantity: 1 };
        cart.push(newItem);
    }
}
update_cart_display();
function update_cart_display(){
    const cart_div=document.getElementById("cart");
    cart_div.innerhtml='';

    if(cart.length===0){
        cart_div.innerhtml='<p>Your cart is empty</p>';
        return;
    }
    const ul = document.createElement('ul');
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = '${item.name} - $${item.price.toFixed(2)} x ${item.quantity}';
        ul.appendChild(li);
    });
    cart_div.appendChild(ul);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalDiv = document.createElement('div');
    totalDiv.textContent = "Total: $${total.toFixed(2)}";
    cart_div.appendChild(totalDiv);
}

